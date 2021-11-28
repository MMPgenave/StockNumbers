import React from "react";
import { useState } from "react";
import "./styles.css";
export default function App() {
  const [arr, setArr] = useState([0]);
  const flag = React.useRef(true);
  const [number, setNumber] = useState(0);
  console.log("app renderd");

  React.useEffect(() => {
    //Do not Mutate the arr
    const newArr = [...arr];
    //Adding 15 element to newArr
    for (let i = 0; i < 15; i++) {
      newArr.push(newArr[newArr.length - 1] + 1);
    }
    //logging the newArr
    console.log(newArr);
    //set arr to newArr by setArr function
    flag.current = true;

    setArr(newArr);
  }, [number]);

  React.useEffect(() => {
    const EEvent = window.addEventListener("scroll", () => {
      const variable = window.scrollY + window.innerHeight;
      if (variable >= document.body.scrollHeight) {
        if (flag.current) {
          console.log("at the bottom of the webpage");
          flag.current = false;
          setNumber((prev) => prev + 1);
        }
      }
    });
    return () => window.removeEventListener("scroll", EEvent);
  }, []);
  return (
    <>
      <h3>
        As you scroll down to get the bottom of the page, 15 new box added to
        the DOM, and so on... .
      </h3>
      <h3 style={{ color: "blue" }}>
        Open the console to see the functionality better
      </h3>

      <div className="container">
        {arr.map((item) => {
          return <div className={number % 2 ? "Even" : "Odd"}>{item}</div>;
        })}
      </div>
    </>
  );
}
