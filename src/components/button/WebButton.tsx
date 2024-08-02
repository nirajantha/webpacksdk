import React from "react";
import "./button.css";
import { Button } from "antd";

interface ButtonProps {
  label: string;
  onclick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const WebButton: React.FC<ButtonProps> = ({
  label,
  onclick,
  children,
  className,
}) => {
  return (
    // <button className="web-btn" onClick={onClick}>
    //   {label}
    // </button>
    <Button className={`bg-[green] ${className}`} onClick={onclick}>
      {label} {children}
    </Button>
  );
};

export default WebButton;
