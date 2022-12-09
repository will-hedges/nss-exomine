import { getFacilityInventories, getFacilities, getTransientData } from "./database.js";

const facilities = getFacilities();
const facilityInventories = getFacilityInventories();

/* 
    code should display the minerals available at a specific facility.

    add event listener for state change custom event
    check the transitory data for a facility id.
    if its 0 or null or undefined, dont do anything.
    if not, iterate through the facility inventories and check the facility id 
    with a .find against the one in the transitory data.
    send that to a function that displays the HTML
    return a .map that displays all of the facility's minerals, and all the appropriate data
*/

document.addEventListener("stateChanged", e => {
    const transientData = getTransientData();

    if (transientData.facilityID > 0) {
        const availableInventories = facilityInventories.find(inv => (inv.id === transientData.invID));

        facilityInventories()
    }
})

export const FacilityInventories = () => {
    
};
