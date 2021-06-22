import { useState, useEffect } from "react";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return {
    currentTime,
  };
};
