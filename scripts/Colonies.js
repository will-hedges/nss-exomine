import { getColonies, getGovernors, getTransientData } from "./database.js";

const colonies = getColonies();
const governors = getGovernors();

// if no governor is selected, display "Colony Materials"
let colonyName = "Colony";

document.addEventListener("stateChanged", (event) => {
    const transientState = getTransientData();
    // get the governorId from transient state
    const governorId = transientState.selectedGovernor;
    // using the governorId, find the matching governor object
    const governorObj = governors.find(
        (governor) => governor.id === governorId
    );

    if (governorObj) {
        // using the governor Object, find the colony with the id of the colonyId
        colonyName = colonies.find(
            (colony) => colony.id === governorObj.colonyId
        ).name;
    } else {
        colonyName = "Colony";
    }

    const colonyHeaderElem = document.querySelector("#colony__header");
    colonyHeaderElem.innerHTML = `${colonyName} Materials`;
});

export const Colonies = () => {
    return `
        <h2 id="colony__header">${colonyName} Materials</h2>
    `;
};
