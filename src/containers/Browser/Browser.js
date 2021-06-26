import React from "react";
import { browser } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { BrowserApp } from "./BrowserApp";

export const Browser = () => {
  return (
    <>
      <AppWindow
        svg={browser.svg}
        backgroundColor={browser.backgroundColor}
        content={<BrowserApp />}
        title="Browser"
      />
    </>
  );
};
