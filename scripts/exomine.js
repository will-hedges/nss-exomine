import { Colonies } from "./Colonies.js";
import { ColonyInventories } from "./ColonyInventories.js";
import { Facilities } from "./Facilities.js";
import { FacilityInventories } from "./FacilityInventories.js";
import { Governors } from "./Governors.js";
import { SpaceCart } from "./SpaceCart.js";

export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>
        <div class="top">
            <div class="governor">
                ${Governors()}
            </div>
            <div class="colonies">
                ${Colonies()}
            </div>
        </div>
        <div class="facilities">
            <div class="facility_html">
                ${Facilities()}
            </div>
        </div>
        <div class="bottom">
            <div class="facility_inventory">
                ${FacilityInventories()}
            </div>   
            <div class="space_cart">
                ${SpaceCart()}
            </div>
        </div>
    `;
};
