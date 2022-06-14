import { useState, useReducer } from 'react';

// 12 minutes: pause
// useReducer recap
// 1. Init state

const initState = {
    job: '',
    jobs: []
};

// 2. Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
console.log(setJob());

// 3. Reducer
const reducer = (state, action) => {

    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        default: throw new Error('Invalid action.')
    }

    return state;
}

// 4. Dispatch
function TodoApp() {

    const [state, dispatch] = useReducer(reducer, initState)
    const {job, jobs} = state

    return(
        <div>
            <h3>To do</h3>
            <input
                value={job}
                placeholder="enter todo..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
            
            >
                Add
            </button>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default TodoApp;