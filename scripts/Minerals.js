import { getMinerals } from "./database.js";

export const Minerals = () => {
    return `
        <h2>Minerals</h2>
        ${getMinerals()};
    `;
};
