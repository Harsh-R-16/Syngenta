import React from "react";
import "./Main.css";
const colors = [
  "#2ebcd2",
  "#54bd68",
  "#ff8b24",
  "#3333ff",
  "#ffc600",
  "#fe654f",
];

export default function Main() {
  const [c, setC] = React.useState(0);
  const [value, setValue] = React.useState("");

  const clcHandler = (e) => {
    let divs = document.getElementsByClassName(e.target.className);

    divs[0] && divs[0].classList.toggle("display");
    divs[1] && divs[1].classList.toggle("display");

    if (e.target.tagName === "P") {
      if (e.currentTarget.id === "div-1") setC((c) => c + 1);
      else if (c >= 0) setC((c) => c - 1);
    }
  };

  const btnHandler = () => {
    let divs = document.getElementsByClassName(value - 1);
    if (divs.length && !divs[0].classList.contains("display")) {
      divs[0].classList.add("display");
      divs[1].classList.remove("display");
      setC((c) => c + 1);
    }
  };

  return (
    <main>
      <h1>React JS Balloon Assignment</h1>
      <section>
        <h3>{colors.length - c} Balloons</h3>

        <div onClick={clcHandler} id="div-1">
          {colors.map((i, index) => (
            <p style={{ backgroundColor: i }} className={index} key={index}>
              {index + 1}
            </p>
          ))}
        </div>
      </section>
      <div id="inp-div">
        <label htmlFor="inp">Select a Balloon: </label>
        <select
          name="inp"
          id="inp"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Select</option>
          {colors.map((i, index) => (
            <option value={index + 1}>{index + 1}</option>
          ))}
        </select>
        <button onClick={btnHandler}>Shoot</button>
      </div>
      <section>
        <h3>{c} Balloons</h3>
        <div onClick={clcHandler} id="div-2">
          {colors.map((i, index) => (
            <p
              style={{ backgroundColor: i }}
              className={index + " display"}
              key={index}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
