import React, { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  return (
    <div>
      {storyIds.map(storyId => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </div>
  );
};

export default StoriesContainer;
