const database = {
  colonies: [
    { id: 1, name: "Earth" },
    { id: 2, name: "Mars" },
    { id: 3, name: "Europa" },
    { id: 4, name: "Titan" },
    { id: 5, name: "Proteus" },
  ],
  minerals: [
    { id: 1, type: "Iron" },
    { id: 2, type: "Chromium" },
    { id: 3, type: "Gold" },
    { id: 4, type: "Nitra" },
    { id: 5, type: "Plutonium" },
  ],
  transientState: {},
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
