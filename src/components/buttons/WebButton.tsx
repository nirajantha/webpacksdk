import React from "react";
import "./button.css";
import { Button } from "antd";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const WebButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    // <button className="web-btn" onClick={onClick}>
    //   {label}
    // </button>
    <Button onClick={onClick} title={label} type="primary" />
  );
};

export default WebButton;
