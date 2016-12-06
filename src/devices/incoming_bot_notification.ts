import { beep } from "../util";
import { Notification } from "farmbot/dist/jsonrpc";
import {
    HardwareState,
    RpcBotLog
} from "../devices/interfaces";
import { error, success, warning } from "../ui";
import { t } from "i18next";

export function handleIncomingBotNotification(msg: Notification<any>,
    dispatch: Function) {
    switch (msg.method) {
        case "status_update":
            dispatch(statusUpdate((msg as Notification<[HardwareState]>)));
            beep();
            break;
        case "log_message":
            handleLogMessage(dispatch, (msg as Notification<[RpcBotLog]>));
            break;
    };
}

function handleLogMessage(dispatch: Function,
    message: Notification<[RpcBotLog]>) {
    dispatch(logNotification(message));
}

function statusUpdate(statusMessage: Notification<[HardwareState]>) {
    return {
        type: "BOT_CHANGE",
        payload: statusMessage.params[0]
    };
}

function logNotification(botLog:
    Notification<[RpcBotLog]>) {
    return {
        type: "BOT_LOG",
        payload: botLog.params[0]
    };
};
