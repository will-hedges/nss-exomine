import { getColonies } from "./database.js";

export const Colonies = () => {
    return `
        <h2>Colonies</h2>
        ${getColonies()}
    `;
};
