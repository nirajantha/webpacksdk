import React from "react";
import WebButton from "./components/button/WebButton";

export class WebpackSDK {
  static webButton(name: string, handleClick: () => void) {
    return <WebButton label={name} onclick={handleClick} />;
  }

  showMessage(message: string) {
    alert(message);
  }
}
