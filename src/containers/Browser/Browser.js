import React from "react";
import { browser } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const Browser = () => {
  return (
    <>
      <AppWindow
        svg={browser.svg}
        backgroundColor={browser.backgroundColor}
        content="Browser"
        title="Browser"
      />
    </>
  );
};
