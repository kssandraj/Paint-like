import { createContext, useState } from "react";
import axios from "axios";
import "./App.css";
import Canvas from "./Components/Canvas";
import { CirclePicker } from "react-color";

function App() {
  const [selectedColor, setColor] = useState("#000000");

  function changeColor(color) {
    setColor(color.hex);
  }

  function onClick() {
    const canvas = document.querySelector("canvas").toDataURL();
    console.log(canvas);
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/img/submit`, {
      imgBase64: canvas,
    });
  }

  return (
    <div className="App">
      <div className="canva">
        <Canvas width={1500} height={700} id="canvas" color={selectedColor} />
      </div>
      <div className="colors-and-buttons">
        <div className="colors">
          <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
        </div>
        <div className="buttons">
          <button onClick={onClick}>Save</button>
          <button onClick={onClick}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
