import HouseData from '../../component/HouseData'

const INITI_STATE={
    data:<HouseData/>
}

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

export const displayreducer=(state=INITI_STATE,action)=>{
    switch (action.type) {
        case "DISPLAY_DETAILS":
            return{
                ...state,
                data:state.data.filter((ele)=>ele.id == action.payload)
            }
            break;
    
        default:
            break;
    }
}