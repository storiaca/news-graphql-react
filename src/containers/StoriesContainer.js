import React, { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds()
      .then(data => setStoryIds(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <p>{JSON.stringify(storyIds)}</p>
    </div>
  );
};

export default StoriesContainer;
