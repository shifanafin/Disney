import { createStore } from "redux"



const initialState = {
    users :[],
    loggedInUser :null,
    individuals:[
        {
            id:1,
            userName:"shif",
            Password:"123"
        }
    ],
    database :[]
}

const reducer = (state = initialState,action)=>{
    switch(action.type)
    {
        case "REGISTER":
            return {
                ...state,
                users : [...state.users,action.payload],
                loggedInUser: action.payload,
            }
        case "LOGIN":
            return {
                ...state,
                users : [...state.users,action.payload],
                loggedInUser: action.payload,
            }

        default:
            return state
    }
}

export default createStore(reducer)

