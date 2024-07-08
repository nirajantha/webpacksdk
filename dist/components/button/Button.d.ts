import React from "react";
import "./button.css";
interface ButtonProps {
    label: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
