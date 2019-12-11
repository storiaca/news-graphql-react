import React, { useState, useEffect } from "react";
import Story from "../components/Story";
import { getStoryIds } from "../services/hnApi";
import {
  GlobalStyle,
  StoriesContainerWrapper
} from "../styles/StoriesContainerStyles";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.map(storyId => (
          <Story storyId={storyId} key={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};

export default StoriesContainer;
