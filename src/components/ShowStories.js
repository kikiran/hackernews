import React from 'react';
import Story from './Story';
import useDataFetcher from './dataFetcher';

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : 'top');

  return (
      <React.Fragment>
       { !stories ? <div show={isLoading}>Loading...</div> :
        stories.map(
          ({ data: story }) => story && <Story key={story.id} story={story} />
        ) 
        }
      </React.Fragment>
  );
};

export default ShowStories;
