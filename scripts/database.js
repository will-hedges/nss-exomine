const database = {
    facilityInventories: [
        { id: 1, mineralId: 1, amount: 12, facilityId: 1 },
        { id: 2, mineralId: 4, amount: 17, facilityId: 1 },
        { id: 3, mineralId: 5, amount: 3, facilityId: 1 },
        { id: 4, mineralId: 1, amount: 16, facilityId: 2 },
        { id: 5, mineralId: 3, amount: 10, facilityId: 2 },
        { id: 6, mineralId: 2, amount: 5, facilityId: 2 },
        { id: 7, mineralId: 3, amount: 28, facilityId: 3 },
        { id: 8, mineralId: 5, amount: 8, facilityId: 3 },
        { id: 9, mineralId: 2, amount: 15, facilityId: 3 },
    ],
    minerals: [
        { id: 1, type: "Iron" },
        { id: 2, type: "Chromium" },
        { id: 3, type: "Gold" },
        { id: 4, type: "Nitra" },
        { id: 5, type: "Plutonium" },
    ],
    facilities: [
        { id: 1, name: "Ganymede", active: true },
        { id: 2, name: "Io", active: true },
        { id: 3, name: "Titan", active: false },
    ],
    governors: [
        { id: 1, name: "George Simmonds", active: false, colonyId: 4 },
        { id: 2, name: "Lisa Hartford", active: true, colonyId: 5 },
        { id: 3, name: "Yoko Ono", active: true, colonyId: 1 },
        { id: 4, name: "Mike Hunt", active: false, colonyId: 2 },
        { id: 5, name: "Jack Dorsey", active: false, colonyId: 3 },
        { id: 6, name: "Hakunna Matata", active: true, colonyId: 5 },
        { id: 7, name: "Loki Odinson", active: true, colonyId: 4 },
        { id: 8, name: "Harvey Birdman", active: true, colonyId: 2 },
    ],
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Europa" },
        { id: 4, name: "Titan" },
        { id: 5, name: "Proteus" },
    ],
    colonyInventories: [
        { id: 1, colonyId: 2, mineralId: 4, amount: 1623 },
        { id: 2, colonyId: 5, mineralId: 4, amount: 5504 },
        { id: 3, colonyId: 2, mineralId: 5, amount: 7573 },
        { id: 4, colonyId: 3, mineralId: 4, amount: 7347 },
        { id: 5, colonyId: 1, mineralId: 4, amount: 8068 },
        { id: 6, colonyId: 4, mineralId: 3, amount: 2429 },
        { id: 7, colonyId: 2, mineralId: 1, amount: 7929 },
        { id: 8, colonyId: 1, mineralId: 1, amount: 1161 },
    ],
    transientState: {},
};

export const getColonies = () => {
    return database.colonies.map((c) => ({ ...c }));
};

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId;
    document.dispatchEvent(new CustomEvent("colonyChanged"));
};

export const getColonyInventories = () => {
    return database.colonyInventories.map((inventory) => ({ ...inventory }));
};

export const getFacilities = () => {
    return database.facilities.map((f) => ({ ...f }));
};

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId;
    document.dispatchEvent(new CustomEvent("facilityChanged"));
};

export const getGovernors = () => {
    return database.governors.map((g) => ({ ...g }));
};

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId;
    document.dispatchEvent(new CustomEvent("governorChanged"));
};

export const getMinerals = () => {
    return database.minerals.map((m) => ({ ...m }));
};

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId;
}

export const getFacilityInventories = () => {
    return database.facilityInventories.map((f) => ({ ...f }));
};

export const getTransientData = () => {
    return { ...database.transientState };
};

/* 
    Below will be the database side of where the purchase takes place.

    We will need to look at the transient data, and get the facility ID and the colony ID.
    Basically we will be subtracting one from the facility inventory's mineral amount, and adding one to
    the colony inventory's amount.

    HOW TO GET MINERAL ID?
    Need to add a setMineral to the setter functions, which will add a mineralID based upon the value of the
    radio option selected to the transient data. (invoke setter function in click event listener for radio buttons)

    iterate through minerals.
    - inside mineral iteration, iterate through facility inventories.
    - if facility ID matches given facility ID, and mineral matches given mineral ID, minus one from the amount property.
    + inside mineral iteration, iterate through colony inventories.
    + if colony ID matches given colony ID, and mineral matches given mineral ID, minus one from the amount property.
    If there is no 
    After the purchase, set transient data back to an empty object.
    Trigger event that re-renders whole page. (add event listener to main.js that invokes renderHTML function)
*/

export const purchaseMineral = () => {
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    const currentFacility = getTransientData().selectedFacility;
    const currentColony = getTransientData().selectedColony;
    const mineral = getTransientData().selectedMineral;
    

    for (const inventory of database.facilityInventories) {
        if (inventory.facilityId === currentFacility && inventory.mineralId === mineral) {
            inventory.amount--;
        }
    }

    for (const inventory of database.colonyInventories) {
        if (inventory.colonyId === currentColony && inventory.mineralId === mineral) {
            inventory.amount++;
        }
    }

    document.dispatchEvent(new CustomEvent("inventoriesChanged"));
};
