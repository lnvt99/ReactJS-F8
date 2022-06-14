import { useState} from 'react'
import Content from './Content'

function MeMo() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count+1)
    }

    return (
        <div>
            <Content/>
            <h1>{count}</h1>
            <button
                onClick={increase}
            >Click</button>
        </div>
    )
}
export default MeMo;