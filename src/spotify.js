// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// Endpoint -> Where we send the user to 

// Throws user to spotify to login 
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Then brings user back to the local host after
// spotify handles the authentication 
const redirectUri = "http://localhost:3000/";

const clientId = "adedf0803c2f4a4ca82d5241e22e7090";

// This represents what permissions we are giving the user
const scopes = [
    "user-read-currently-playing", 
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modified-playback-state"
];

/* 
1. window.location.hash -> 
    Returns the fragment identifier of the webpage -> 
    A fragment identifier refers to a source: Primary points to a subordinate source

2. .substring(1) -> Returns part of a string between the start and end indexes, in this case, from index 1
3. .split('&') -> Divides a stringinto substrings, puts them into an array, and returns the array, seperating them with &
4. .reduce((initial, item) => {}) -> Executes provided function on each element of the array, resulting in a single output ->
    The four arguments it can take include 1. Accumulator (accumulates callbacks), 
                                           2. Current Value (Current element being processed), 
                                           3. Current Index (Current element of that index) -> Optional, 
                                           4. Source Array (The array reduce() called) -> Optional,
                                           5. InitialValue -> A value that can be used as the first argument for the first callback
                                                Callback -> function that executes on each element of the array excluding the first element
    In this case it take 1. initialValue, 2. The item to be processed 

5. let parts = item.split('=') -> Takes each item and divides them into a list of substrings, 
                                  puts the substrings into an array, and returns that array 
                                  while removing '=' from each element
                            
6. initial[parts[0]] = decodeURIComponent(parts[1]) ->  Adds 0 index of parts array to the initial array that was returned
                       decodeURIComponent -> Simply decodes the URI that was created by encodeURIComponent
                       URI -> Uniform Resource Identifier
*/


export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

// Checks to see if everything exists here
export const loginUrl =
    `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&  
    scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



