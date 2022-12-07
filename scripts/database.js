const database = {
    facilityInventories: [
        {id: 1, mineralId: 1, amount: 12, facilityId: 1},
        {id: 2, mineralId: 4, amount: 17, facilityId: 1},
        {id: 3, mineralId: 5, amount: 3, facilityId: 1},
        {id: 4, mineralId: 1, amount: 16, facilityId: 2},
        {id: 5, mineralId: 3, amount: 10, facilityId: 2},
        {id: 6, mineralId: 2, amount: 5, facilityId: 2},
        {id: 7, mineralId: 3, amount: 28, facilityId: 3},
        {id: 8, mineralId: 5, amount: 8, facilityId: 3},
        {id: 9, mineralId: 2, amount: 15, facilityId: 3},
    ],
    minerals: [
        {id: 1, type: "Iron"},
        {id: 2, type: "Chromium"},
        {id: 3, type: "Gold"},
        {id: 4, type: "Nitra"},
        {id: 5, type: "Plutonium"},
    ],
    miningFacilities: [
        { id: 1, name: "Ganymede", active: true },
        { id: 2, name: "Io", active: true },
        { id: 3, name: "Titan", active: false }
    ],
    governors: [
        { id: 1, name: "George Simmonds", active: true, colonyId: 4 },
        { id: 2, name: "Lisa Hartford", active: true, colonyId: 5 },
        { id: 3, name: "Yoko Ono", active: true, colonyId: 1 },
        { id: 4, name: "Mike Hunt", active: true, colonyId: 2 },
        { id: 5, name: "Jack Dorsey", active: true, colonyId: 3 },
    ],
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Europa" },
        { id: 4, name: "Titan" },
        { id: 5, name: "Proteus" },
    ],
    transientState: {}
};

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId;
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getFacilities = () => {
    return database.facilities.map((f) => ({ ...f }));
};

export const purchaseMineral = () => {
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"));
};
