import { memo } from 'react';
function Content({onHandleClick}) {
    console.log('re-render');
    return (
        <div>
            <h1>Hello useCallback</h1>
            <button
                onClick={onHandleClick}
            >Click</button>
        </div>
    )
}

export default memo(Content);