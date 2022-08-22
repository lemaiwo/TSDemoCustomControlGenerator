import RenderManager from "sap/ui/core/RenderManager";
import BusinessCard from "./BusinessCard";
/**
 * BusinessCard renderer
 * @namespace be.wl.TSDemoCustomControlGenerator.control
 */
const BusinessCardRenderer = {
    apiVersion: 2,
    render: function (rm: RenderManager, control: BusinessCard) {
        rm.openStart("div", control).class("card").openEnd();
        rm.openStart("div").class("head").openEnd();
        rm.openStart("div").class("avatar").openEnd();
        rm.openStart("img").style("src", control.getSrc1()).openEnd();
        rm.close("img");
        rm.close("div");
        rm.openStart("h2").class("name").openEnd();
        rm.text(control.getProp1());
        rm.close("h2");
        rm.openStart("h5").class("position").openEnd();
        rm.text(control.getProp2());
        rm.close("h5");
        rm.close("div");
        rm.openStart("div").class("body").openEnd();
        rm.openStart("ul").class("social").openEnd();
        rm.openStart("li").openEnd();
        rm.openStart("a").class("fb").style("href", control.getHref1()).openEnd();
        rm.openStart("i").class("fa").class("fa-facebook").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.openStart("li").openEnd();
        rm.openStart("a").class("tw").style("href", control.getHref2()).openEnd();
        rm.openStart("i").class("fa").class("fa-twitter").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.openStart("li").openEnd();
        rm.openStart("a").class("ig").style("href", control.getHref3()).openEnd();
        rm.openStart("i").class("fa").class("fa-instagram").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.openStart("li").openEnd();
        rm.openStart("a").class("in").style("href", control.getHref4()).openEnd();
        rm.openStart("i").class("fa").class("fa-linkedin").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.openStart("li").openEnd();
        rm.openStart("a").class("em").style("href", control.getHref5()).openEnd();
        rm.openStart("i").class("fa").class("fa-envelope").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.openStart("li").openEnd();
        rm.openStart("a").class("wb").style("href", control.getHref6()).openEnd();
        rm.openStart("i").class("fa").class("fa-globe").openEnd();
        rm.close("i");
        rm.close("a");
        rm.close("li");
        rm.close("ul");
        rm.close("div");
        rm.close("div");
    }
};
export default BusinessCardRenderer;
