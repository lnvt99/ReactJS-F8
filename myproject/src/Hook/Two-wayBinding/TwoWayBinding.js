import { useState } from "react";

// Initial data
const giftArr = ["Mercedes", "Mazda", "Roll Royce"];
const courses = [
  {
    id: 1,
    nameCourse: "ReactJS",
  },
  {
    id: 2,
    nameCourse: "Hook",
  },
  {
    id: 3,
    nameCourse: "2WayBinding",
  },
];

function TwoWayBinding() {
  // Initial useState
    const [gift, setGift] = useState();
    const [name, setName] = useState("");
    const [checked, setChecked] = useState([]);

    console.log(checked)
  // Handle function
  const handleGift = () => {
    const index = Math.floor(Math.random() * giftArr.length);
    setGift(giftArr[index]);
  };


  const handleCheck = (id) => {
    setChecked(prev => {
        const isChecked = checked.includes(id);
        if(isChecked) {
            // Unchecked
            return checked.filter(item => item !== id);
        } else {
            return [...prev, id];
        }
    });
  }

  const handleSubmit = () => {
    // console.log("BBB");
    console.log({id: checked})

  };

  return (
    <div>
      <div style={{ padding: 32 }}>
        <h1>{gift || "Chua co phan thuong"}</h1>
        <button onClick={handleGift}>Get Reward</button>
      </div>

      <div style={{ padding: 32 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button
          onClick={() => {
            setName("BBB");
          }}
        >
          Change
        </button>
      </div>

      <div style={{ padding: 32 }}>
          {courses.map(course => (
              <div key = {course.id}>
                  <input 
                    type= "checkbox"
                    checked = {checked.includes(course.id)}
                    onChange={() => handleCheck(course.id)}/>
                  {course.nameCourse}
              </div>
          ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default TwoWayBinding;
