import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ControlSettings } from "sap/ui/core/Control";

declare module "./BusinessCard" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $BusinessCardSettings extends $ControlSettings {
        src1?: string | PropertyBindingInfo;
        prop1?: string | PropertyBindingInfo;
        prop2?: string | PropertyBindingInfo;
        href1?: string | PropertyBindingInfo;
        href2?: string | PropertyBindingInfo;
        href3?: string | PropertyBindingInfo;
        href4?: string | PropertyBindingInfo;
        href5?: string | PropertyBindingInfo;
        href6?: string | PropertyBindingInfo;
    }

    export default interface BusinessCard {

        // property: src1
        getSrc1(): string;
        setSrc1(src1: string): this;

        // property: prop1
        getProp1(): string;
        setProp1(prop1: string): this;

        // property: prop2
        getProp2(): string;
        setProp2(prop2: string): this;

        // property: href1
        getHref1(): string;
        setHref1(href1: string): this;

        // property: href2
        getHref2(): string;
        setHref2(href2: string): this;

        // property: href3
        getHref3(): string;
        setHref3(href3: string): this;

        // property: href4
        getHref4(): string;
        setHref4(href4: string): this;

        // property: href5
        getHref5(): string;
        setHref5(href5: string): this;

        // property: href6
        getHref6(): string;
        setHref6(href6: string): this;
    }
}
