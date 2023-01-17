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

        default:
            return state
    }
}