import { getFacilityInventories } from "./database.js";

export const FacilityInventories = () => {
    return `
        <h2>Facility Inventories</h2>
        ${getFacilityInventories()};
    `;
};
