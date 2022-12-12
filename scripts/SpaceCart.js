import {
    getTransientData,
    getFacilities,
    getMinerals,
    getFacilityInventories,
    purchaseMineral
} from "./database.js";

const facilities = getFacilities();
const minerals = getMinerals();

document.addEventListener("click", (e) => {
    const clickEvent = e.target;

    if (clickEvent.name === "facilityInventory") {
        const facilityId = getTransientData().selectedFacility;

        const spaceCart = minerals.find(mineral => 
            mineral.id === parseInt(clickEvent.value)
        );

        const facilityName = facilities.find(
            (facility) => facility.id === facilityId
        ).name;

        const spaceCartElem = document.querySelector("#space-cart");
        spaceCartElem.innerHTML = `1 ton of ${spaceCart.type} from ${facilityName}`;
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

/* 
    Event Listener to make purchase

    when the button is clicked, run the purchase mineral function
*/

document.addEventListener("click", e => {
    const itemClicked = e.target;

    if (itemClicked.id === "purchase-button") {
        purchaseMineral();
        document.querySelector("#space-cart").innerHTML = "";
    }
})