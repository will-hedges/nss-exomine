import { getFacilities } from "./database.js";
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
        facilities.map(
            facility => {
                return `<option value="${facility.id}--">${facility.name}</option>`
            }
        ).join("")
    }
 </select>`
 }