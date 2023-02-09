export const ADD = (house) => {
    return {
        type:"ADD_SHORTLIST",
        payload:house
    }
}

export const DELETE=(id)=>{
    return{
        type:"REMOVE_SHORTLIST",
        payload:id
    }
}