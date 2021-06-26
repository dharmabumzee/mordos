import React, { useEffect, useState, useContext } from "react";
import { downloadIcon, documentDownload } from "../../utils/icons";
import { AppContext as TextEditorContext } from "../../context/AppContext";

export const SaveFile = ({ file, id }) => {
  const { downloadAvailable, setDownloadAvailable, fileToSave } = useContext(
    TextEditorContext
  );

  const [downloadLink, setDownloadLink] = useState("");

  const makeTextFile = () => {
    let data;
    if (file) {
      data = new Blob([file[0].text], {
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
      {downloadAvailable !== id ? (
        <div onClick={() => fileToSave(id)} className={``}>
          {downloadIcon}
        </div>
      ) : (
        <a
          download={`${file[0].title}.txt`}
          href={downloadLink}
          className={`${file[0].id === id ? "relative" : "hidden"}`}
          onClick={() => setDownloadAvailable(null)}
        >
          {documentDownload}
          <span className="absolute -right-2">ready</span>
        </a>
      )}
    </>
  );
};
