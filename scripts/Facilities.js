import { getFacilities, setFacility } from "./database.js";

const facilities = getFacilities();

export const Facilities = () => {
    return `
        <h2>Facilities</h2>
       
        ${convertFacilities()}
    `;
};

const convertFacilities = () => {
    return   `<select class="facility" id="facility">
    <option value="">Choose a Facility</option>
    ${
        facilities
            .filter( facility =>
                facility.active )
            .map(
                facility => {
                    return `<option value="${facility.id}--">${facility.name}</option>`
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
    const changeEvent = e.target;
    if (changeEvent.id === "facility") {
        setFacility(parseInt(changeEvent.value));
    }
});