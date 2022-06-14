import { useState, useReducer } from 'react'

/*
1. Init state: 0
2. Actions: Up / Down
3. Reducer
4. Dispatch
*/

// Init state
const initState = 0;

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
    console.log('reduce running.');
    switch(action) {
        case UP_ACTION: return state + 1;
        case DOWN_ACTION: return state -1;
        default: throw new Error('Invalid action');
    }
}


function UseReducer() {

    const [count, dispatch] = useReducer(reducer, initState);

    return(
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >Up</button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >Down</button>
        </div>
    )
}

export default UseReducer;