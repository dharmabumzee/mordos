import React from "react";
import { rss } from "../../utils/icons";
import { AppWindow } from "../../components/AppWindow";
import { FetchAPI } from "../../components/FetchAPI";

export const RSSReader = () => {
  return (
    <>
      <AppWindow
        svg={rss.svg}
        backgroundColor={rss.backgroundColor}
        content={<FetchAPI />}
        title="RSS READER"
      />
    </>
  );
};
