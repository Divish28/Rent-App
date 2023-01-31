const INIT_STATE = {
    Shortlists: []
}

export const shortlistReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_SHORTLIST":
            return {
                ...state,
                Shortlists: [...state.Shortlists, action.payload]
            }

        case "REMOVE_SHORTLIST":
            const data= state.Shortlists.filter((el)=>el.id !== action.payload )
            return{
                ...state,
                Shortlists:data
            }    
        default:
            return state
    }
}