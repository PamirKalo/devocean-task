export const load_start = ()=>{
    return {
        type: 'LOAD_START',
        payload: true,
    }
}
export const load = (arr)=>{
    return {
        type: 'LOAD',
        payload: arr,
    }
}