import { getFacilities } from "./database.js";

export const Facilities = () => {
    return `
        <h2>Facilities</h2>
        ${getFacilities()};
    `;
};
