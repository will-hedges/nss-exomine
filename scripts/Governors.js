import { getGovernors } from "./database.js";

export const Governors = () => {
    return `
        <h2>Governors</h2>
        ${getGovernors()};
    `;
};
