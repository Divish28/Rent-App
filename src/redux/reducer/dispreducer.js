import HouseData from '../../component/HouseData'
const INITI_STATE={
    data:[]
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