import {memo} from 'react'
/*
    NGUYÊN LÍ HOẠT ĐỘNG
- memo: nhận component và check các props trong component đó
            sau mỗi lần render có bị thay đổi hay không
*/
function Content() {
    
    console.log('re-render');
    
    return (
        <div>
            <h1>Hello Memo</h1>
        </div>
    )
}

export default memo(Content);