import {
    getColonyInventories,
    getMinerals,
    getTransientData,
} from "./database.js";

const minerals = getMinerals();

const combineColonyInventory = () => {
    const colonyInventories = getColonyInventories();
    const transientState = getTransientData();
    const colonyId = transientState.selectedColony;
    const totalColonyInventory = [];

    for (const inventory of colonyInventories) {
        if (inventory.colonyId === colonyId) {
            const mineralName = minerals.find(
                (mineral) => mineral.id === inventory.mineralId
            ).type;
            totalColonyInventory.push(
                `<li>${mineralName}: ${inventory.amount} tons</li>`
            );
        }
    }
    const listOfInventoryStrings = totalColonyInventory.join("\n");
    return `<ul>${listOfInventoryStrings}</ul>`;
};

document.addEventListener("colonyChanged", (event) => {
    const colonyInventory = combineColonyInventory();
    const colonyInventoryContainer =
        document.querySelector(".colony_inventory");
    colonyInventoryContainer.innerHTML = colonyInventory;
});

export const ColonyInventories = () => {
    return combineColonyInventory();
};
