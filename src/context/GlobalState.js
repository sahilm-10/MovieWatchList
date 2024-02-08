import React, {createContext,useEffect,useReducer} from "react";
import AppReducer from "./AppReducer";

// initial state

const initialState = {
    watchlist:[],
    watched:[]
}

// create context

export const GlobalContext = createContext(initialState);


// create provider
//providing values
export const GlobalProvider = props =>{
    const[state,dispatch] = useReducer(AppReducer,initialState)

    //actions
    const addMovieToWatchList = (movie) =>{
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST",payload:movie})
    }

    return(
        <GlobalContext.Provider value={{watchlist:state.watchlist,watched:state.watched,addMovieToWatchList}}>
            {props.children}
        </GlobalContext.Provider>
    )
}