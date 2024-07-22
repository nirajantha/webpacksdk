import React from "react";
import WebButton from "./components/button/WebButton";

export class WebpackSDK {
  static webButton(name: string) {
    return <WebButton label={name} />;
  }

  showMessage(message: string) {
    alert(message);
  }
}
