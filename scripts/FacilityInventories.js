import { getFacilityInventories, getTransientData, getMinerals, setMineral } from "./database.js";

const minerals = getMinerals();

/* 
    code should display the minerals available at a specific facility.

    add event listener for facility state changed.
    start HTML variable.
    check if the transient data has a selected facility value higher than 0.
    if true, iterate through facility inventories and grab the ones with the correct value.
    iterate again through the available inventories, and match them up with the correct mineral types.
    take the appopriate data and format it into html, add to HTML variable.
    use document queryselectors and .innerHTML to set the correct <ul> id as the recipient of the html.

    use function to send HTML to exomine.js
*/

document.addEventListener("facilityChanged", e => {
    const transientData = getTransientData();
    const facilityInventories = getFacilityInventories();
    let htmlList = "";

    if (transientData.selectedFacility > 0) {
        const availableInventories = facilityInventories.filter(inv => inv.facilityId === transientData.selectedFacility);
        
        htmlList = availableInventories
            .map(inv => {
                for (const mineral of minerals) {
                    if (inv.mineralId === mineral.id && inv.amount > 0) {
                        return `<li>
                        <input type="radio" name="facilityInventory" value="${inv.mineralId}" />${inv.amount} tons of ${mineral.type}
                        </li>`
                    }
                }})
            .join("");
    }
    
    const facilintyInventoriesElem = document.querySelector("#facilityInventories__list");
    facilintyInventoriesElem.innerHTML = `${htmlList}`;
})

export const FacilityInventories = () => {
    let html = `<h2>Facility Minerals</h2>\n<ul id="facilityInventories__list"></ul>`;

    return html;
};

/* 
    When a mineral is chosen it will set the selectedMineral property of transient state to
    the currently selected mineral

    listen for change
    check if correct thing changed
    call setMineral function with the value as parameter
*/

document.addEventListener("change", e => {
    const changeEvent = e.target;
    
    if (changeEvent.name === "facilityInventory") {
        setMineral(parseInt(changeEvent.value));
    }
});
