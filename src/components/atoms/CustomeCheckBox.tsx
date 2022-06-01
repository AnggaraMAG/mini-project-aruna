import React from "react";
import { Checkbox } from "antd";

interface InputProps {
  defaultChecked: boolean;
  disabled: boolean;
  checked: boolean;
}

const CustomeInput = (props: InputProps) => {
  const { defaultChecked, disabled, checked } = props;
  console.log(`defaultChecked`, defaultChecked);
  return (
    <Checkbox
      checked={checked}
      style={{ marginLeft: 10, marginTop: 5 }}
      defaultChecked={defaultChecked}
      disabled={disabled}
    />
  );
};

export default CustomeInput;
