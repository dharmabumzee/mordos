import React, { useEffect, useState } from "react";
import { downloadIcon } from "../../utils/icons";

export const SaveFile = ({ file }) => {
  const [downloadLink, setDownloadLink] = useState("");

  const makeTextFile = async () => {
    let data;
    if (file) {
      data = await new Blob([file[0].text], {
        type: "text/plain",
      });
    }

    if (downloadLink !== "") window.URL.revokeObjectURL(downloadLink);

    file && setDownloadLink(window.URL.createObjectURL(data));
  };

  useEffect(() => {
    makeTextFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      {file && file.length && (
        <a download={`${file[0].title}.txt`} href={downloadLink}>
          download
        </a>
      )}
    </>
  );
  // return { downloadLink };
};
