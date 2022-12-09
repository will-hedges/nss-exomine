import { getFacilityInventories, getTransientData, getMinerals } from "./database.js";

const facilityInventories = getFacilityInventories();
const minerals = getMinerals();

/* 
    code should display the minerals available at a specific facility.

    add event listener for state changed.
    start HTML variable.
    check if the transient data has a selected facility value higher than 0.
    if true, iterate through facility inventories and grab the ones with the correct value.
    iterate again through the available inventories, and match them up with the correct mineral types.
    take the appopriate data and format it into html, add to HTML variable.
    use function to send HTML to exomine.js

*/

export const FacilityInventories = (htmlList) => {
    let html = "<h2>Facility Minerals</h2>\n";

    return html += htmlList;
};

document.addEventListener("facilityChanged", e => {
    const transientData = getTransientData();
    let html = `<ul class="facilityInventories">`;

    if (transientData.selectedFacility > 0) {
        const availableInventories = facilityInventories.filter(inv => inv.facilityId === transientData.selectedFacility);

        html += availableInventories.map(inv => {
            for (const mineral of minerals) {
                if (inv.mineralId === mineral.id) {
                    return `<li>
                        <input type="radio" name="facilityInventory" value="${inv.id}" />${inv.amount} tons of ${mineral.name}
                    </li>`
                }
            }
        })
    }

    html += "</ul>"

    FacilityInventories(html);
})
