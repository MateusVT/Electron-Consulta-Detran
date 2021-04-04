import {
    AntiCaptcha,
    AntiCaptchaError,
    ErrorCodes,
    IImageToTextTask,
    INoCaptchaTaskProxyless,
    INoCaptchaTaskProxylessResult,
    QueueTypes,
    TaskTypes
} from "anticaptcha";
import axios from "axios";

// Registering the API Client.
const AntiCaptchaAPI = new AntiCaptcha("0b5b4d1fde2514e2affe7eb7569b19f5"); // You can pass true as second argument to enable debug logs.

const mainProcess = async () => {
    try {
        // Checking the account balance before creating a task. This is a conveniance method.
        if (!(await AntiCaptchaAPI.isBalanceGreaterThan(10))) {
            // You can dispatch a warning using mailer or do whatever.
            console.warn("Take care, you're running low on money !");
        }

        // Get service stats
        const stats = await AntiCaptchaAPI.getQueueStats(QueueTypes.RECAPTCHA_PROXYLESS);

        // Creating nocaptcha proxyless task
        //body base64
        const taskId = await AntiCaptchaAPI.createTask<IImageToTextTask>({
            type: TaskTypes.IMAGE_TO_TEXT,
            body: "",
            case: false,
            phrase: false,
            minLength: 5,
            maxLength: 6
        });

        // Waiting for resolution and do something
        const response = await AntiCaptchaAPI.getTaskResult<
            INoCaptchaTaskProxylessResult
        >(taskId);

        console.log(`Response Code: ${response.solution.gRecaptchaResponse}`);
    } catch (e) {
        if (
            e instanceof AntiCaptchaError &&
            e.code === ErrorCodes.ERROR_IP_BLOCKED
        ) {
            // do something...
        }
    }
};

export async function getCookies() {
    
    try {
        const response = await axios.get('https://www.extratodebito.detran.pr.gov.br/detranextratos/gerarExtratoPontuacao.do?action=viewExtract');
        console.log(response);
      } catch (error) {
        console.error(error);
      }

}

async function getCaptcha() {

}