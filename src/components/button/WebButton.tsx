import React from "react";
import "./button.css";
import { Button } from "antd";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const WebButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  children,
  className,
}) => {
  return (
    // <button className="web-btn" onClick={onClick}>
    //   {label}
    // </button>
    <Button className={`bg-[green] ${className}`} onClick={onClick}>
      {label} {children}
    </Button>
  );
};

export default WebButton;
