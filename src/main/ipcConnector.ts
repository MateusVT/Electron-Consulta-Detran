import { ipcRenderer } from 'electron';

export async function sendRequestByIPC(method: string, args?: any) {
    return ipcRenderer.invoke(method, args).then((data) => {
        return data
    }).catch((resp) =>
        console.warn(resp)
    )
}