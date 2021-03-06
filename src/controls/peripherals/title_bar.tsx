import * as React from "react";
import { startEditing, startControlling, saveAll } from "./actions";
import { PeripheralState } from "./interfaces";
import { t } from "i18next";
import * as _ from "lodash";

interface TitleBarProps extends PeripheralState { dispatch: Function; }

export function TitleBar(props: TitleBarProps) {
    if (props.editorMode === "editing") {
        return <TitleBarEditing {...props} />;
    } else {
        return <TitleBarControlling {...props} />;
    };
}

function TitleBarEditing(props: TitleBarProps) {
    let dirty = _.where(props.all, { dirty: true }).length;

    return <div className="col-sm-12">
        <button
            className="gray button-like widget-control"
            type="button"
            onClick={() => props.dispatch(startControlling())}>
            {t("BACK")}
        </button>
        <button
            hidden={!dirty}
            className="green button-like widget-control"
            type="button"
            onClick={() => props.dispatch(saveAll())}>
            {t("SAVE*")}
        </button>
        <div className="widget-header">
            <h5>Peripherals</h5>
            <i className="fa fa-question-circle widget-help-icon">
                <div className="widget-help-text">
                    {t(`Use these toggle
                        switches to control FarmBot's peripherals
                        in realtime. To edit and create new peripherals, press
                        the EDIT button. Make sure to turn
                        things off when you're done!`)}
                </div>
            </i>
        </div>
    </div>;
}

function TitleBarControlling(props: TitleBarProps) {
    return <div className="col-sm-12">
        <button
            className="gray button-like widget-control"
            type="button"
            onClick={() => props.dispatch(startEditing())}>
            {t("EDIT")}
        </button>
        <div className="widget-header">
            <h5>Peripherals</h5>
            <i className="fa fa-question-circle widget-help-icon">
                <div className="widget-help-text">
                    {t(`Use these toggle
                        switches to control FarmBot's peripherals
                        in realtime. To edit and create new peripherals, press
                        the EDIT button. Make sure to turn
                        things off when you're done!`)}
                </div>
            </i>
        </div>
    </div>;
}
