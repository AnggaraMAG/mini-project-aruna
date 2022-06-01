import { ChangeEvent } from "react";
import {
  CustomeButtonIcon,
  CustomeCheckBox,
  CustomeInput,
} from "../components/atoms";
import { message } from "antd";
import "./App.css";
import { CgMathDivide, CgBorderStyleSolid } from "react-icons/cg";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

function App() {
  // states
  const [result, setResult] = useState(0);
  const [firstVal, setFirstVal] = useState("");
  const [secondVal, setSecondVal] = useState("");
  const [thirdVal, setThirdVal] = useState("");

  // checked
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, check: string) => {
    let target = e.target.value;
    if (check === "first") {
      setFirstVal(target);
      setFirstChecked(target !== "" ? true : false);
    }

    if (check === "second") {
      setSecondVal(target);
      setSecondChecked(target !== "" ? true : false);
    }
    if (check === "third") {
      setThirdVal(target);
      setThirdChecked(target !== "" ? true : false);
    }
  };

  const sumValues = (param: any) => {
    if (
      (firstChecked === false &&
        secondChecked === false &&
        thirdChecked === false) ||
      (firstChecked === true &&
        secondChecked === false &&
        thirdChecked === false) ||
      (firstChecked === false &&
        secondChecked === true &&
        thirdChecked === false) ||
      (firstChecked === false &&
        secondChecked === false &&
        thirdChecked === true)
    ) {
      message.warning("Mohon value di isi lebih dari 1", 1);
      setResult(0);
    } else {
      if (param === "addition")
        return setResult(
          Number(firstVal) + Number(secondVal) + Number(thirdVal)
        );
      if (param === "subtraction")
        return setResult(
          Number(firstVal) - Number(secondVal) - Number(thirdVal)
        );

      if (param === "multiplication")
        return setResult(
          Number(firstVal !== "" ? firstVal : "1") *
            Number(secondVal !== "" ? secondVal : "1") *
            Number(thirdVal !== "" ? thirdVal : "1")
        );
      if (param === "division")
        return setResult(
          Number(firstVal !== "" ? firstVal : "1") /
            Number(secondVal !== "" ? secondVal : "1") /
            Number(thirdVal !== "" ? thirdVal : "1")
        );
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h2>Calculator App</h2>
        <div className="container_input">
          <CustomeInput
            value={firstVal}
            type="number"
            onChange={(e) => {
              handleChange(e, "first");
            }}
          />
          <CustomeCheckBox
            defaultChecked={false}
            disabled={true}
            checked={firstChecked}
          />
        </div>
        <div className="container_input">
          <CustomeInput
            value={secondVal}
            type="number"
            onChange={(e) => {
              handleChange(e, "second");
            }}
          />
          <CustomeCheckBox
            defaultChecked={false}
            disabled={true}
            checked={secondChecked}
          />
        </div>
        <div className="container_input">
          <CustomeInput
            value={thirdVal}
            type="number"
            onChange={(e) => {
              handleChange(e, "third");
            }}
          />
          <CustomeCheckBox
            defaultChecked={false}
            disabled={true}
            checked={thirdChecked}
          />
        </div>
        <div>
          <CustomeButtonIcon
            icon={<AiOutlinePlus />}
            onClick={() => sumValues("addition")}
          />
          <CustomeButtonIcon
            icon={<CgBorderStyleSolid />}
            onClick={() => sumValues("subtraction")}
          />
          <CustomeButtonIcon
            icon={<AiOutlineClose />}
            onClick={() => sumValues("multiplication")}
          />
          <CustomeButtonIcon
            icon={<CgMathDivide />}
            onClick={() => sumValues("division")}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <h2>Hasil : {result}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
