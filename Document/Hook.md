# HOOK
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

*Chưa dùng Hooks, chỉ là UI component*
function ComponentA() {
    return <h1> Haven't used hooks yet </h1>;
}

*Sử dụng Hooks, hỗ trợ thêm nhiều tính năng*
function ComponentB() {
    <!-- useState -->
    **const [state, setState] = useState(initState);** 
}

