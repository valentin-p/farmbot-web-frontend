import * as React from "react";
import { t } from "i18next";

interface EmptyEditorProps {
}

/** The bottom half of the regimen editor panel (when there's something to
    actually edit). */
export function EmptyEditor({}: EmptyEditorProps) {
    return <div>
        <p> {
            t(`
            You don't have any Regimens yet. Click "Add" from the Regimens 
            widget to create and edit your first Regimen.
            `)} </p>
    </div>;
}
