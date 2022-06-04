export const load_start = ()=>{
    return {
        type: 'LOAD_START',
    }
}
export const load = (arr)=>{
    return {
        type: 'LOAD',
        payload: arr,
    }
}

export const load_failed = (error)=>{
    return {
        type: 'LOAD_FAILED',
        payload: error,
    }
}
