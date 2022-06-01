import React from "react";
import { Input } from "antd";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

const CustomeInput = (props: InputProps) => {
  const { onChange, type, value, ...nativeProps } = props;
  return (
    <Input value={value} onChange={onChange} {...nativeProps} type={type} />
  );
};

export default CustomeInput;
