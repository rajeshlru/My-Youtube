import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEOS_AU_API,
  YOUTUBE_VIDEOS_US_API,
  YOUTUBE_VIDEOS_DE_API,
} from "./utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import "./shimmer.css";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [usVideos, setUsVideos] = useState([]);
  const [auVideos, setAuVideos] = useState([]);
  const [deVideos, setDeVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    // getDeVideos();// Initial fetch

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 10) {
        getDeVideos();
        getUsVideos();
        getAuVideos();
        // Fetch more videos at bottom
      }
    };

    window.addEventListener("scrollend", handleScroll);

    // Clean up listener on unmount
    return () => window.removeEventListener("scrollend", handleScroll);
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // setVideos(json.items);
    console.log(json);
    setVideos((prev) => [...prev, ...json?.items]);
  };

  const getUsVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_US_API);
    const json = await data.json();
    // setUsVideos(json?.items);
    setUsVideos((prev) => [...prev, ...json?.items]);
  };

  const getAuVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_AU_API);
    const json = await data.json();
    // setAuVideos(json?.items);
    setAuVideos((prev) => [...prev, ...json?.items]);
  };

  const getDeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_DE_API);
    const json = await data.json();
    // setDeVideos(json?.items);

    setDeVideos((prev) => [...prev, ...json?.items]);
  };

  return (
    <div className="">
      <div className="">
        {/* Global Videos */}
        {videos.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-4 w-[1200px] ml-10 pl-12 relative top-20">
            {videos.map((video) => (
              <div key={video.id} className="mx-2 ">
                <Link to={"/watch?v=" + video.id}>
                  <VideoCard info={video} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* US Videos */}
        {usVideos.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-4 w-[1200px] ml-10 pl-12 relative top-20">
            {usVideos.map((video) => (
              <div key={video.id} className="mx-2 ">
                <Link to={"/watch?v=" + video.id}>
                  <VideoCard info={video} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Australia Videos */}
        {auVideos.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-4 w-[1200px] ml-10 pl-12 relative top-20">
            {auVideos.map((video) => (
              <div key={video.id} className="mx-2 ">
                <Link to={"/watch?v=" + video.id}>
                  <VideoCard info={video} />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Germany Videos */}
        {deVideos.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-4 w-[1200px] ml-10 pl-12 relative top-20">
            {deVideos.map((video) => (
              <div key={video.id} className="mx-2 ">
                <Link to={"/watch?v=" + video.id}>
                  <VideoCard info={video} />
                </Link>
              </div>
            ))}
          </div>
        )}

        <div>
          <Shimmer />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
