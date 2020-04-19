import YOUTUBE_API_KEY from "../config/youtube";

export const searchYouTube = (
  { query, max = 5, key = YOUTUBE_API_KEY },
  callback
) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=
    ${query}&maxResults=${max}&key=${key}&type=video`)
    .then((response) => response.json())
    .then((json) => callback(json.items));
};
