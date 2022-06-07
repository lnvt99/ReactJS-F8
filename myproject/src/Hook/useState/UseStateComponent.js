import { useState } from "react";

/** NOTE
1. Component sẽ được re-render lại sau khi setState
2. Initial state chỉ dùng được lần đầu
3. Set state với callback
4. Initial với callback
5. Set state là thay thế state bằng giá trị mới
 */

const orderCost = [100, 200, 300];
function UseStateComponent() {
  // useState
  const [counter, setCounter] = useState(() => {
    const total = orderCost.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const [info, setInfo] = useState({
    name: "Hook useState",
    age: 2022,
    status: true,
  });

  // Function
  const handleIncrease = () => {
    /* prevState: callback sẽ trả giá trị trước đó của state 
                    hay giá trị hiện tại của state
      (prevState) => prevState + 1: 
        prevState là 1, return về giá trị mới của state là 2 - setState*/
    // setCounter((prevState) => prevState + 1);
    setCounter(counter + 1);
  };

  const handleUpdate = () => {
    // setInfo({
    //   ...info,
    //   bio: 'F$T'
    // });

    setInfo(prev => ({
      ...prev,
      bio: "F$T",
    }));
  };

  console.log("re-render");
  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Incease</button>
      </div>

      <div>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export default UseStateComponent;
