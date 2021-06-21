import React from "react";
import { textfile } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const TextFile = () => {
  return (
    <>
      <AppWindow
        svg={textfile.svg}
        backgroundColor={textfile.backgroundColor}
        content="TextFile"
        title="TextFile"
      />
    </>
  );
};
