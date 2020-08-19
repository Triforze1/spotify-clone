import React, { createContext, useContext, useReducer } from 'react';

// This prepares the data layer so we can then create it
export const DataLayerContext = createContext();

// Creating the data layer
export const DataLayer = ({ initialState, reducer, children }) => (

    // DataLayerContext -> Creates a context (or a bucket) that stores data 'globally'
    // .Provider -> Makes the DataLayer available to any nested components 'globally'
    // useReducer(reducer, initialState) -> Allos functional components to access functions from your state management 
        // We are passing reducer, and initial state over as props  
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)