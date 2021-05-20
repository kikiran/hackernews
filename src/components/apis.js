import axios from 'axios';

const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';


const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 10).map(getStory));
    return console.log('stories', stories);
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};