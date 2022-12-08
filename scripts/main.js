import { Exomine } from "./Exomine.js";

export const renderAllHTML = () => {
    return Exomine();
};

const mainContainer = document.querySelector("#container");

mainContainer.innerHTML = renderAllHTML();
