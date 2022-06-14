import { useRef, useState, useEffect } from 'react';

// Lưu các giá trị qua một tham chiếu bên ngoài
// Return là 1 obj
// Khi chúng ta dùng useRef để lưu giá trị, thì khi phải render lại một function component,
//      giá trị đã lưu sẽ không bị thay đổi, mà vẫn giữ được giá trị đã lưu trước đó.
function UseRef() {

    const [countdown, setCountdown] = useState(60);
    
    const timerId = useRef()

    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = countdown
    }, [countdown])


    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCountdown(prevState =>prevState -1)
        },1000);
        console.log('Start -> ', timerId);
    }

    const handleStop = () => {
        console.log('Stop -> ', timerId);
    }

    console.log(countdown, prevCount.current)

    return (
        <div>
            <h1>{countdown}</h1>
            <button 
                onClick={handleStart}
            >
                Start
            </button>
            <button
                onClick={handleStop}
            >
                Stop
            </button>
        </div>
    )
}

export default UseRef;