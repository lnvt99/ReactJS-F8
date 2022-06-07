# HOOK: là 1 hàm, 1 method, 1 function component được ReactJS viết sẵn
import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallback,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandle,
    useDebugValue,
} from 'react';

# useState()
*Chưa dùng Hooks, chỉ là UI component*
function ComponentA() {
    return <h1> Haven't used hooks yet </h1>;
}

*Sử dụng Hooks, hỗ trợ thêm nhiều tính năng*
function ComponentB() {
    
    const [state, setState] = useState(initState)

    useEffect(() => { }, [deps])

    useLayoutEffect(() => { }, [deps])

    const ref = useRef()

    const fn = useCallback(() => {  }, [deps])

    const result = useMemo(() => { }, [depps])

    const [state, dispatch] = useReducer(reducer, initialArg, init)

    const value = useContext(MyContext)

    useImperativeHandle(ref, createHandle, [deps])

    useDebugValue(isOnline ? 'Online' : 'Offline')

    return <h1> Hooks </h1>
}

- Only use function component
- Modern project

