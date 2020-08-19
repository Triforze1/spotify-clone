
export const initialState = {
    user: null, 
    playlists: [], 
    playing: false, 
    item: null, 
    //token: "BQAhd9v38OdB8lzzaNkSnPWsaWLfHCBcKG2lNRKLhzFHLjCDviRh4TniRDYcWyuBu89BO56rIuXcTagE1ZL4S00YFWYjCAb6vraJW8BsDO41PO5PH1x04JB9KgXPTMf9VllLHJJFcTz3gQ",
};

// Creation of the reducer that takes a state and action
// The state is how it currently looks, while the action
    // is what is used to manipulate the state
const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {

                // Take the existing properties of the state, seperate them
                ...state, 

                // Set the user to the current action.user
                user: action.user 
            };

        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly
            };

        default:
            return state;
    }
}

export default reducer;
