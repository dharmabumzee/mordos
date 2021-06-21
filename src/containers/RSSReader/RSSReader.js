import React from "react";
import { rss } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";

export const RSSReader = () => {
  return (
    <>
      <AppWindow
        svg={rss.svg}
        backgroundColor={rss.backgroundColor}
        content="RSS READER"
        title="RSS READER"
      />
    </>
  );
};
