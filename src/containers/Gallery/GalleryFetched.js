import { useState, useEffect } from "react";
import axios from "axios";

export const GalleryFetched = () => {
  const [fetchedPhotos, setFetchedPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?_page=0&_limit=20`)
      .then((res) => setFetchedPhotos(res.data));
  }, []);

  return { fetchedPhotos };
};
