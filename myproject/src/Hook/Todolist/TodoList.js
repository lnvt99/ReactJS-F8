import { useState } from 'react';

function TodoList() {



    const [doWork, setDoWork] = useState('');

    // const [doWorks, setDoWorks] = useState(storageDoWorks ?? []);
    // Callback
    const [doWorks, setDoWorks] = useState(() => {
        const storageDoWorks = JSON.parse(localStorage.getItem('jobs'));
        return storageDoWorks;
    });

    const handleDoWork = () => {
        setDoWorks(prev => {
            const newDoWorks = [...prev, doWork];
            const jsonJobs = JSON.stringify(newDoWorks);
            localStorage.setItem('jobs', jsonJobs);
            return newDoWorks;
        });
        setDoWork('');


    }

    // console.log(doWork)

    return (
        <div>
            <input 
                value = {doWork}
                onChange = { e => setDoWork(e.target.value)}
            />
            <button onClick={() => handleDoWork()}>Add</button>
            <ul>
                {
                    doWorks.map((item, index) => (
                        <li key = {index}>{item}</li>
                    ))
               }
            </ul>
        </div>
    )
}

export default TodoList;