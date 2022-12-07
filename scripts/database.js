const database = {
    minerals: [
        {id: 1, type: "Iron"},
        {id: 2, type: "Chromium"},
        {id: 3, type: "Gold"},
        {id: 4, type: "Nitra"},
        {id: 5, type: "Plutonium"},
    ],
    
    miningFacilities: [{
        id: 1,
        name: "Ganymede",
        active: true},
        { 
            id: 2,
        name:"Io",
        active: true},
    {
        id: 3,
        name:"Titan",
        active: false

    }],
    transientState: {},
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

