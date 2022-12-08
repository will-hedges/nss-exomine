import { Colonies } from "./Colonies.js";
import { Facilities } from "./Facilities.js";
import { FacilityInventories } from "./FacilityInventories.js";
import { Governors } from "./Governors.js";
import { SpaceCart } from "./SpaceCart.js";

export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>
        ${Governors()}
        ${Colonies()}
        ${Facilities()}
        ${FacilityInventories()}
        ${SpaceCart()}
    `;
};
