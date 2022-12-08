import { getColonies } from "./database.js";

const colonies = getColonies();

export const Colonies = () => {
    return `
        <section class="choices__colonies">
            <h2>Colonies</h2>
            <select id="colony">
                <option value="0">Select a colony</option>
                ${colonies
                    .map((colony) => {
                        return `<option value="${colony.id}">${colony.name}</option>`;
                    })
                    .join("")}
            </select>
        </section>
    `;
};
