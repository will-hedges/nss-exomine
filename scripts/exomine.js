import { Colonies } from "./Colonies.js";
import { Facilities } from "./Facilities.js";
import { Minerals } from "./Minerals.js";
import { FacilityInventories } from "./FacilityInventories.js";
import { Governors } from "./Governors.js";

export const Exomine = () => {
    return `
        ${Colonies()}
        ${Facilities()}
        ${Minerals()}
        ${FacilityInventories()}
        ${Governors()}
    `;
};