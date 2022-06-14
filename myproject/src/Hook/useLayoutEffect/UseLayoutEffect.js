import {useState, useLayoutEffect} from 'react';


/*
    useLayoutEffect
- Cập nhật lại state
- Cập nhật DOM (mutated)
- Gọi cleanup nếu deps thay đổi (sync)
- Gọi useLayoutEffect callback (sync)
- Render lại UI
*/
function UseLayoutEffect() {
    
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if(count > 3) setCount(0)
    },[count])

    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>
                Run
            </button>
        </div>
    )
}

export default UseLayoutEffect;