import React from "react";
import "./button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const WebButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="web-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default WebButton;
