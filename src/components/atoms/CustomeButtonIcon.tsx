import React from "react";
import { Button } from "antd";
interface InputProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  icon: any;
}

const CustomeButtonIcon = (props: InputProps) => {
  const { onClick, icon } = props;
  return <Button onClick={onClick} icon={icon} style={{ marginRight: 10 }} />;
};

export default CustomeButtonIcon;
