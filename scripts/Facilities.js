import { getFacilities, setFacility, getTransientData, clearTransientData } from "./database.js";
const facilities = getFacilities();

export const Facilities = () => {
    return `
        <h2>Facilities</h2>
       
        ${convertFacilities()}
    `;
};

const convertFacilities = () => {
    return `<select class="facility" id="facility-list">
    <option value="null">Choose a Facility</option>
    ${facilities
            .filter(facility =>
                facility.active)
            .map(
                facility => {
                    return `<option value="${facility.id}">${facility.name}</option>`
                })
            .join("")
        }
 </select>`
}

/* 
add event listener for change in form
check if the change was in the facility select
return it
*/


document.addEventListener("change", e => {
    if (e.target.id === "facility-list") {
        const spaceCartElem = document.querySelector("#space-cart");
        spaceCartElem.innerHTML = ""
        if (e.target.value !== "null") {
            setFacility(parseInt(e.target.value));
            
        }
    }

}
)