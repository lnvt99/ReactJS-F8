import { useState } from 'react';
import Content from "./Content";
function Mount() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
           { show && <Content/>}
        </div>
    )
}

export default Mount;