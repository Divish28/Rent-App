export const ADD = (house) => {
    return {
        type:"ADD_SHORTLIST",
        payload:house
    }
}

export const DLT=(id)=>{
    return{
        type:"REMOVE_SHORTLIST",
        payload:id
    }
}

export const DISP=(detail)=>{
    return{
        type:"DISPLAY_DETAILS",
        payload:detail
    }
}