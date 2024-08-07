import { useState } from "react";
import axios from "axios";

function Write() {
  let [inputValue, setInputValue] = useState("");

  const saveData = async () => {
    try {
      await axios.post("http://localhost:5000/writetodatabase", {
        content: inputValue,
      });
      console.log("Data: ", inputValue);
      alert("Data saved: ", inputValue);
    } catch (error) {
      console.log("error while saving dude: ", error.message);
    }
  };

  // prettier-ignore
  return (
        <div>
            <input type="string" placeholder="enter something"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={saveData}> Save Data to MongoDB</button>
        </div>
    );
}

export default Write;
