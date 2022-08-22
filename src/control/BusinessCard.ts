import Control from "sap/ui/core/Control";
import Event from "sap/ui/base/Event";
import BusinessCardRenderer from "./BusinessCardRenderer";
/**
 * @extends Control
 *
 * @constructor
 * @public
 * @namespace be.wl.TSDemoCustomControlGenerator.control
 */
export default class BusinessCard extends Control {
    constructor(id?: string | $BusinessCardSettings);
    constructor(id?: string, settings?: $BusinessCardSettings);
    constructor(id?: string, settings?: $BusinessCardSettings) { super(id, settings); }
    static readonly metadata = {
        properties: {
            src1: "string",
            prop1: "string",
            prop2: "string",
            href1: "string",
            href2: "string",
            href3: "string",
            href4: "string",
            href5: "string",
            href6: "string"
        },
        events: {}
    };
    static renderer = BusinessCardRenderer;
}
