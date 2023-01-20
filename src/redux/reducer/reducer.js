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

        case "DISPLAY_DETAILS":
            const detail=state.Shortlists
            return{
                ...state,
                Shortlists:detail
            }

        default:
            return state
    }
}