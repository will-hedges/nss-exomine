import { getGovernors, setGovernor, clearTransientData } from "./database.js";
import { renderAllHTML } from "./main.js";

const governors = getGovernors();

document.addEventListener("change", (event) => {
    if (event.target.id === "null") {
        clearTransientData();
        mainContainer.innerHTML = renderAllHTML();
    } else {
        setGovernor(parseInt(event.target.value));
    }
});

const listGovernors = () => {
    let HTMLString = `<select id="governor-list"><option value="null">Please select a Governor</option>`;
    for (const g of governors) {
        if(g.active === true) {
        HTMLString += `<option value="${g.id}">${g.name}</option>`
    }
}
HTMLString += `</select>`  
return HTMLString  
};

export const Governors = () => {
    return `
        <h2>Governors</h2>
        ${listGovernors()}
    `;
};
