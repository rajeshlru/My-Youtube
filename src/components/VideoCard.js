import React from "react";
import { formatViewCount, getTimeAgo } from "./utils/helper";

const VideoCard = ({ info }) => {
  // Guard clause: if info or snippet is missing, don't render
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // or return null;
  }

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className="mb-6 mx-1 flex flex-col items-center justify-around hover:   transition-transform duration-300 ease-in-out 
      transform hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:rounded-2xl "
    >
      <img alt="" src={thumbnails?.medium?.url} className="rounded-[15px] " />
      <ul>
        <li className="w-[270px] tetx-black font-bold line-clamp-2">{title}</li>
        <li> {channelTitle}</li>
        <li>
          {" "}
          {formatViewCount(viewCount)} • {getTimeAgo(snippet?.publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
