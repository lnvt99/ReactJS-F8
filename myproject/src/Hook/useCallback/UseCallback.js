import {useState, useCallback} from 'react';
import Content from './Content';

function UseCallBack() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
    }, []);

    return (
        <div>
            <Content onHandleClick={handleClick}/>
            <h1>{count}</h1>
            
        </div>
    )
}

export default UseCallBack;