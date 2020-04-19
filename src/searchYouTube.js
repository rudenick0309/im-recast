export const searchYouTube = ({ query, max, key }, callback) => {
  let option = {
    q: query,
    part: "snippet",
    key: key,
    maxResults: max,
    type: "video",
  };
  let url = "https://www.googleapis.com/youtube/v3/search?";
  for (let key in option) {
    url = url + `${key}=${option[key]}&`;
  }
  url = url.substr(0, url.length - 1);

  // ! fetching
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return callback(data.items);
    });
};
