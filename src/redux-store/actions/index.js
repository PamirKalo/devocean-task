export const load = (arr)=>{
    return {
        type: 'LOAD',
        payload: arr,
    }
}