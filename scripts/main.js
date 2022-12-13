import { Exomine } from "./Exomine.js";
import { FacilityInventories } from "./FacilityInventories.js";

export const renderAllHTML = () => {
    return Exomine();
};

export const renderPurchase = () => {
    document.dispatchEvent(new CustomEvent("facilityChanged"));
    document.dispatchEvent(new CustomEvent("colonyChanged"));
}

const mainContainer = document.querySelector("#container");

mainContainer.innerHTML = renderAllHTML();

document.addEventListener("inventoriesChanged", e => {
    renderPurchase();
})