import React from "react";
import { TextEditorNote } from "./TextEditorNote";

const mockupData = [
  {
    id: 1,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 2,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 3,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 4,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 5,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 6,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 7,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 8,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 9,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 10,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 11,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 12,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 13,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 14,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 15,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
  {
    id: 16,
    title: "lyrics",
    date: "21.03.2021",
    excerpt: "na na na na...",
  },
];

export const TextEditorList = () => {
  return (
    // <div className="col-span-3 bg-gradient-to-r from-purple-50 via-gray-50 to-indigo-50 ">
    <div className="col-span-3 bg-gray-50 ">
      {mockupData.map(({ id, title, date, excerpt }) => {
        return (
          <React.Fragment key={id}>
            <TextEditorNote title={title} date={date} excerpt={excerpt} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
