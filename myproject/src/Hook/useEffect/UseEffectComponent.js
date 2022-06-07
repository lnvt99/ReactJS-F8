import Content from './Content.js';
import { useState } from 'react';

function UseEffectComponent() {

    const [show, setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>
    )
}

export default UseEffectComponent;