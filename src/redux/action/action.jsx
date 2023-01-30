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

export const DISP = (id)=>{
    return{
        type:"DISPLAY_SHORTLIST",
        payload:id
    }
}