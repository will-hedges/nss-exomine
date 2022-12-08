import { Colonies } from "./Colonies.js";
import { Facilities } from "./Facilities.js";
import { FacilityInventories } from "./FacilityInventories.js";
import { Governors } from "./Governors.js";

export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>
        ${Governors()}
        ${Colonies()}
        ${Facilities()}
        ${FacilityInventories()}
        <!-- space cart will go here -->
    `;
};
