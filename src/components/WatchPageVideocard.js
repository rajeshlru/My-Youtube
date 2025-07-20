import React from "react";
import { formatViewCount, getTimeAgo } from "./utils/helper";

const WatchPageVideocard = ({ info }) => {
  // Guard clause: if info or snippet is missing, don't render
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // or return null;
  }

  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex ">
      <div className="mb-6 mx-1 flex flex-row items-center justify-around  ">
        <img
          alt=""
          src={thumbnails?.medium?.url}
          className="rounded-[15px] w-[200px]"
        />
        <div>
          <ul className="px-5">
            <li className="w-[270px] tetx-black font-bold line-clamp-2 ">
              {title}
            </li>
            <li> {channelTitle}</li>
            <li>
              {" "}
              {formatViewCount(viewCount)} • {getTimeAgo(snippet?.publishedAt)}{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WatchPageVideocard;
