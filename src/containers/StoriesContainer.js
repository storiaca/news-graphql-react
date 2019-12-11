import React, { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => (
        <Story storyId={storyId} key={storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
