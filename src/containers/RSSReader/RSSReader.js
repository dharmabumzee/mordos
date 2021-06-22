import React from "react";
import { rss } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { RSSContent } from "./RSSContent";

export const RSSReader = () => {
  return (
    <>
      <AppWindow
        svg={rss.svg}
        backgroundColor={rss.backgroundColor}
        content={<RSSContent />}
        title="RSS READER"
      />
    </>
  );
};
