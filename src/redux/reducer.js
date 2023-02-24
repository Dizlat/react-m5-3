
const count = {
    namber: 0
}

export default function reducer( state = count, action ) {
    
    if (action.type === "CHANGE_ON_NEXT") {
        const a = state.namber + 1
        return { ...state, namber: a} 
    }
    else if (action.type === "CHANGE_ON_PREV" && state.namber !== 0) {
        const a = state.namber - 1
        return { ...state, namber: a}
    }
    else if (action.type === "RESET_COUNT") {
        return { ...state, namber: 0}
    }
    return state
} 