import axios from 'axios';
import { app, BrowserWindow, ipcMain, ipcRenderer, Session } from "electron";
import fetch, { Headers } from 'node-fetch';
import path from "path";
import { Connection, createConnection } from 'mongoose';
import { Client } from '../types/Types';
import { ObjectId } from 'mongodb';
import log from 'electron-log';
import { autoUpdater } from 'electron-updater';
import appInfo from '../../package.json';

let connection: Connection

const mongoDbUrl: string = (process.env.MONGO_DB_URL || "error");

const mongooseConnection = createConnection(mongoDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const URL_BASE = "https://www.extratodebito.detran.pr.gov.br/detranextratos"
const URL_LOGIN = `${URL_BASE}/gerarExtratoPontuacao.do?action=viewExtract`
const URL_CAPTCHA = `${URL_BASE}/jcaptcha.jpg?rndm=0000000000`
const URL_EXTRATO = `${URL_BASE}/gerarExtratoPontuacao.do?action=imprimir`

var FormData = require('form-data');

ipcMain.handle('captcha', async (event, ...args) => {

  const response = await axios.get(URL_CAPTCHA, {
    headers: {
      Connection: 'keep-alive'
    },
    responseType: 'arraybuffer'
  })

  const [cookie] = response.headers["set-cookie"];

  return { cookie: cookie, data: response.data }
})

ipcMain.handle('login', async (event, ...args) => {

  const [argsDestructor] = args
  const captcha = argsDestructor.captcha
  const cookie = argsDestructor.cookies.split(";")[0]
  const client: Client = argsDestructor.client

  let formData = new FormData();
  formData.append('cookieexists', 'true');
  formData.append('cnh', client.cnh);
  formData.append('tipoCnh', client.tipoCnh);
  formData.append('cpf', client.cpf);
  formData.append('validadeCnh', client.validadeCnh);
  formData.append('senha', captcha);


  const rawResponse = await fetch(URL_LOGIN, {
    method: 'POST',
    headers: new Headers({
      Cookie: cookie
    }),
    body: formData
  });
  const data = await rawResponse.text()
  return { data: data }

})

ipcMain.handle('extrato', async (event, ...args) => {

  const [argsDestructor] = args
  const cookie = argsDestructor.cookies.split(";")[0]

  const response = await axios({
    method: "POST",
    url: URL_EXTRATO,
    data: {
      cookieexists: 'true',//true
      cnh: '06623193003',
      tipoCnh: '2',
      cpf: '07203202917',
      validadeCnh: '23/12/2020'
    },
    headers: {
      "content-type": "application/pdf",
      Connection: 'keep-alive',
      Cookie: cookie
    }
  })

  return { cookie: "response.headers['set-cookie'][0]", data: "response.data " }
  // return { cookie: response.headers['set-cookie'][0], data: response.data }

})

ipcMain.handle("find-user", async (event, args) => {

  const collectionUser = connection.db.collection('users')
  var user = await collectionUser.findOne({ email: args.email, password: args.password })

  return user ? { ...user, _id: Uint8ArrayToHexString(user._id.id) } : null;
});

ipcMain.handle("find-clients", async (event, args) => {

  const collectionClients = connection.db.collection('clients')
  const clients = await collectionClients.find({ user_id: new ObjectId(args.user_id) }).toArray()

  return clients.length > 0 ? clients.map((client: any) => {
    return {
      ...client,
      _id: client._id.toString(),
      user_id: client.user_id.toString()
    }
  }) : [];
});

ipcMain.handle("find-cnh-infos", async (event, args) => {
  const collectionClients = connection.db.collection('detran-infos')
  const cnhInfos = await collectionClients.find({ user_id: new ObjectId(args.user_id) }).toArray()

  return cnhInfos.length > 0 ? cnhInfos.map((cnhInfo: any) => {
    return {
      ...cnhInfo,
      _id: cnhInfo._id.toString(),
      user_id: cnhInfo.user_id.toString(),
      client_id: cnhInfo.client_id.toString()
    }
  }) : [];
});

// ipcMain.handle("find-cnh-infos", async (event, args) => {
//   const collectionClients = connection.db.collection('clients')
//   const clients = await collectionClients.aggregate([
//     {
//       lookup:
//       {
//         from: "detran-infos",
//         localField: "client_id",
//         foreignField: "_id",
//         as: "detranInfos"
//       }
//     }
//   ]).toArray()
//   console.log(clients)
//   return []
// });


ipcMain.handle("new-client", async (event, args: Client) => {

  const collectionClients = connection.db.collection('clients')
  await collectionClients.insertOne({ ...args, _id: new ObjectId(), user_id: new ObjectId(args.user_id) })

});


ipcMain.handle("delete-client", async (event, args) => {

  const collectionClients = connection.db.collection('clients')
  await collectionClients.deleteOne({ _id: new ObjectId(args.client_id) })

});


ipcMain.handle("save-cnh-infos", async (event, args) => {

  const collectionDetranInfos = connection.db.collection('detran-infos')
  await collectionDetranInfos.updateOne(
    { "client_id": new ObjectId(args.client_id) },
    { $set: { ...args, client_id: new ObjectId(args.client_id), user_id: new ObjectId(args.user_id) } },
    { upsert: true }
  )

});


declare global {
  const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
  const MAIN_WINDOW_WEBPACK_ENTRY: string;// http://localhost:3000/main_window
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: null | BrowserWindow;

async function createWindow() {

  console.log(process.env.MONGO_DB_URL) 
  // Create the browser window.
  mainWindow = new BrowserWindow({
    title: "Consulta Detran " + appInfo.version,
    icon: path.join('./public/logo.png'),
    darkTheme: true,
    center: true,
    width: 800,
    height: 600,
    resizable: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  /** Manage browser sessions, cookies, cache, proxy settings, etc */
  const ses = mainWindow.webContents.session;

  /**add chrome dev tools */
  addReactDevTools(ses);
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {

  mongooseConnection.then(con => {
    console.log('DB is connected')
    connection = con
    createWindow()
  }).catch(error => {
    console.log('Error on database connection', error)
  });
}
);



// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

function addReactDevTools(ses: Session) {
  const devToolsModulePath = path.join(process.cwd(), "lib", "react-dev-tools");
  ses.loadExtension(devToolsModulePath);
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.on('app_version', (event) => {
  const title = document.getElementById('title');
  ipcRenderer.removeAllListeners('app_version');
  if (title) {
    title.innerText = 'Consulta Detran ' + appInfo.version;
  }
  event.sender.send('app_version', { version: app.getVersion() });
})

autoUpdater.on('update_available', () => {
  autoUpdater.downloadUpdate()
  mainWindow?.webContents.send('update_available');
});

autoUpdater.on('update_downloaded', () => {
  mainWindow?.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

autoUpdater.on("download_progress", progressObj => {
	log.info("Tracking progress");
	var log_message = "Download speed: " + progressObj.bytesPerSecond;
	log_message = log_message + " - Downloaded " + progressObj.percent + "%";
	log_message =
		log_message +
		" (" +
		progressObj.transferred +
		"/" +
		progressObj.total +
		")";
	log.info(log_message);
	mainWindow?.webContents.send("download_progress", log_message);
});

function Uint8ArrayToHexString(uint8: ArrayBuffer) {
  return Buffer.from(uint8).toString('hex');
}

