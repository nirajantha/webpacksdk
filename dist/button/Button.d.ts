import React from "react";
import "./Button.css";
interface ButtonProps {
  label: string;
  onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
