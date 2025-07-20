const GOOGLE_API_KEY = "AIzaSyD5MqyAwRIG_F_j5N-yk02IV-I3fxm9aZ8";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

const GOOGLE_API_US_KEY = "AIzaSyCRezXwfwwoyTx98JqiehZLSlBFlDqsoHw";

export const YOUTUBE_VIDEOS_US_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=US&key=" +
  GOOGLE_API_US_KEY;

const GOOGLE_API_AU_KEY = "AIzaSyDeJ3lFF1q1YR5WDtV-gJfr_gbR6xc_bbY";

export const YOUTUBE_VIDEOS_AU_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=AU&key=" +
  GOOGLE_API_AU_KEY;

const GOOGLE_API_DE_KEY = "AIzaSyAoesrXdYtcO5Qcgxc8xXvN-k7n_ucEo3w";

export const YOUTUBE_VIDEOS_DE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=DE&key=" +
  GOOGLE_API_DE_KEY;

const COMMENTS_KEY_API = "AIzaSyDblP6bJ1XZ1ofmO2SZfEQeH2Mzz77AlCQ";

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
  COMMENTS_KEY_API;

const PLAYLIST_KEY = "AIzaSyDc3HfxQHPC5-rTpiBNeF7ds1XWrecbnP8";

export const PLAYLIST_API =
  "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=" +
  PLAYLIST_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 50;
