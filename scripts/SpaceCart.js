import {
    getTransientData,
    getFacilities,
    getMinerals,
    getFacilityInventories,
} from "./database.js";

const facilities = getFacilities();
const minerals = getMinerals();
const facilityInv = getFacilityInventories();

document.addEventListener("click", (e) => {
    if (e.target.name === "facilityInventory") {
        const spaceCart = {};
        for (const inv of facilityInv) {
            if (inv.id === parseInt(e.target.value)) {
                spaceCart.amount = 1;
                for (const mineral of minerals) {
                    if (mineral.id === inv.mineralId) {
                        spaceCart.item = mineral.type;
                    }
                }
            }
        }
        const transientState = getTransientData();
        const facilityId = transientState.selectedFacility;
        const facilityName = facilities.find(
            (facility) => facility.id === facilityId
        ).name;
        const spaceCartElem = document.querySelector("#space-cart");
        spaceCartElem.innerHTML = `${spaceCart.amount} ton of ${spaceCart.item} from ${facilityName}`;
    }
});

export const SpaceCart = () => {
    return `
        <div id="space-cart__container">
            <h2>Space Cart</h2>
            <div id="space-cart"></div>
            <button type="button" id="purchase-button">Purchase Mineral</button>
        </div>
    `;
};
