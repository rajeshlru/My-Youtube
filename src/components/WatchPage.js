// import React, { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faThumbsUp,
//   faThumbsDown,
//   faShare,
//   faDownload,
//   faPaperPlane,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   YOUTUBE_VIDEOS_API,
//   YOUTUBE_VIDEOS_US_API,
//   YOUTUBE_VIDEOS_AU_API,
//   YOUTUBE_VIDEOS_DE_API,
//   COMMENTS_API,
//   PLAYLIST_API,
// } from "./utils/constants";
// import CommentContainer from "./CommentContainer";
// const WatchPage = () => {
//   const [searchParams] = useSearchParams();
//   const videoId = searchParams.get("v");
//   const [videos, setVideos] = useState([]);
//   const [usVideos, setUsVideos] = useState([]);
//   const [auVideos, setAuVideos] = useState([]);
//   const [deVideos, setDeVideos] = useState([]);
//   const [Comments, setComments] = useState([]);
//   const [playlist, setPlaylist] = useState([]);
//   useEffect(() => {
//     getVideos();
//     getUsVideos();
//     getAuVideos();
//     getDeVideos();
//     getComments();
//     getPlaylist();
//   }, []);
//   const getPlaylist = async () => {
//     const data = await fetch(PLAYLIST_API);
//     const json = await data.json();
//     console.log(json.items);
//     setPlaylist(json.items);
//   };
//   const getComments = async () => {
//     const data = await fetch(COMMENTS_API);
//     const json = await data.json();
//     //console.log(json.items);
//     setComments(json.items);
//   };
//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_API);
//     const json = await data.json();
//     setVideos(json.items);
//   };
//   const getUsVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_US_API);
//     const json = await data.json();
//     setUsVideos(json?.items);
//   };
//   const getAuVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_AU_API);
//     const json = await data.json();
//     setAuVideos(json?.items);
//   };
//   const getDeVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_DE_API);
//     const json = await data.json();
//     setDeVideos(json?.items);
//   };
//   // Helper to match video by id or id.videoId
//   const findMatchingVideo = (list) =>
//     list.find((v) => v.id === videoId || v.id?.videoId === videoId);
//   const matchedVideo =
//     findMatchingVideo(videos) ||
//     findMatchingVideo(usVideos) ||
//     findMatchingVideo(auVideos) ||
//     findMatchingVideo(deVideos);
//   return (
//     <div className="pt-7 px-4 flex">
//       <span>
//         <iframe
//           className="border-0 rounded-[15px]"
//           width="910"
//           height="530"
//           src={"https://www.youtube.com/embed/" + videoId}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//         {/* Video Title below iframe */}
//         <div className="mt-4 ">
//           <h2 className="text-xl font-bold text-black">
//             {matchedVideo?.snippet?.title}
//           </h2>
//           <h2 className="text-[18px] text-black">
//             {matchedVideo?.statistics?.viewCount} Views
//           </h2>
//           <div className="flex items-center ">
//             <div className="flex items-center">
//               <img
//                 className="  h-8 text-2xl  mt-1  hover:bg-[#00000015] "
//                 alt="UserIcon"
//                 src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
//               />
//               <div className="m-4 font-bold text-2xl ">
//                 {matchedVideo?.snippet?.channelTitle}
//               </div>
//             </div>
//             <div>
//               <button className=" text-2xl text-white border-2 bg-red-600 hover:bg-red-800 rounded-full px-3 h-10 mx-10 ">
//                 Subscribe
//               </button>
//             </div>
//             <div className="flex justify-end w-[500px]">
//               <div className=" mx-1">
//                 <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[147.18px] h-10">
//                   <FontAwesomeIcon icon={faThumbsUp} className="text-xl " />{" "}
//                   {matchedVideo?.statistics?.likeCount}
//                   {"  |   "}
//                   <FontAwesomeIcon
//                     icon={faThumbsDown}
//                     className="text-xl mx-1"
//                   />
//                 </button>
//               </div>
//               <div className=" mx-1">
//                 {" "}
//                 <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[97.18px] h-10 ">
//                   Share{" "}
//                   <FontAwesomeIcon
//                     icon={faShare}
//                     className="text-xl text-gray-600 hover:text-black"
//                   />
//                 </button>
//               </div>
//               <div className=" mx-1">
//                 <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[137.18px] h-10 ">
//                   {" "}
//                   <FontAwesomeIcon
//                     icon={faDownload}
//                     className="text-xl text-gray-600 hover:text-black mx-2"
//                   />
//                   Download
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="w-[895px] bg-gray-100 hover:bg-gray-200 rounded-[18px] p-4 my-3">
//             {matchedVideo?.snippet?.localized?.description}
//           </div>
//           <CommentContainer />
//           <div>
//             <h1 className="text-2xl font-semibold py-6 px-3"> Live Chat </h1>
//             {Comments.map((com) => {
//               const comment = com?.snippet?.topLevelComment?.snippet;
//               return (
//                 <div
//                   key={com.id}
//                   className="flex items-start mb-4 border-b pb-4 gap-4"
//                 >
//                   <img
//                     src={comment?.authorProfileImageUrl}
//                     alt="user"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div>
//                     <p className="font-semibold text-sm text-gray-800">
//                       {comment?.authorDisplayName}
//                     </p>
//                     <p className="text-gray-700 text-[15px]">
//                       {comment?.textDisplay}
//                     </p>
//                     <div className="flex items-center space-x-4 mt-2 text-gray-600 text-sm">
//                       <span>
//                         <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
//                         {comment?.likeCount}
//                       </span>
//                       <span className="hover:underline cursor-pointer">
//                         Reply
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div>
//             <button>
//               <input
//                 type=""
//                 placeholder="Go to Live Chat"
//                 className="border-2 w-[800px] h-[45px] mx-3 px-5 rounded-3xl bg-gray-100 mb-3"
//               ></input>{" "}
//               <span className="">
//                 <FontAwesomeIcon
//                   icon={faPaperPlane}
//                   className="text-xl text-blue-500 hover:text-blue-600 cursor-pointer bg-gray-800 rounded-full p-4 mt-1 -mb-4"
//                 />
//               </span>
//             </button>
//           </div>
//         </div>
//       </span>
//       <span>
//         <div className="">
//           {" "}
//           <h2 className="font-bold text-center">Recommended for you</h2>
//           <h2 className="mx-5 text-slate-900"> Google Developers</h2>
//           {playlist.map((play) => (
//             <Link to="/">
//               <div key={play?.id} className="flex ">
//                 <img
//                   alt=""
//                   src={play?.snippet?.thumbnails?.medium?.url}
//                   className="my-1 mx-4 w-[160px] rounded-[12px] transition-transform duration-300 ease-in-out
//        transform hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:rounded-2xl"
//                 />
//                 <span>
//                   <span className="font-bold text-[16px]">
//                     {play?.snippet?.title}
//                   </span>
//                   <span className="line-clamp-2">
//                     {play?.snippet?.description}
//                   </span>{" "}
//                   <span className="line-clamp-2 mb-4">
//                     • {play?.snippet?.channelTitle}
//                   </span>
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </span>
//     </div>
//   );
// };
// export default WatchPage;

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faShare,
  faDownload,
  // faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  YOUTUBE_VIDEOS_API,
  YOUTUBE_VIDEOS_US_API,
  YOUTUBE_VIDEOS_AU_API,
  YOUTUBE_VIDEOS_DE_API,
  COMMENTS_API,
  PLAYLIST_API,
} from "./utils/constants";
import CommentContainer from "./CommentContainer";
import WatchPageShimmer from "./WatchPageShimmer";
import LiveChat from "./LiveChat";
import WatchPageVideocard from "./WatchPageVideocard";
import { formatViewCount, getTimeAgo } from "./utils/helper";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "./appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videos, setVideos] = useState([]);
  const [usVideos, setUsVideos] = useState([]);
  const [auVideos, setAuVideos] = useState([]);
  const [deVideos, setDeVideos] = useState([]);
  const [Comments, setComments] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [showMore, setShowMore] = useState(false);
  // const dispatch = useDispatch();
  <WatchPageShimmer />;
  useEffect(() => {
    getVideos();
    getUsVideos();
    getAuVideos();
    getDeVideos();
    getComments();
    getPlaylist();
  }, []);

  const getPlaylist = async () => {
    const data = await fetch(PLAYLIST_API);
    const json = await data.json();
    setPlaylist(json.items);
  };

  const getComments = async () => {
    const data = await fetch(COMMENTS_API);
    const json = await data.json();
    setComments(json.items);
  };

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const getUsVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_US_API);
    const json = await data.json();
    setUsVideos(json?.items);
  };

  const getAuVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_AU_API);
    const json = await data.json();
    setAuVideos(json?.items);
  };

  const getDeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_DE_API);
    const json = await data.json();
    setDeVideos(json?.items);
  };

  const findMatchingVideo = (list) =>
    list.find((v) => v.id === videoId || v.id?.videoId === videoId);

  const matchedVideo =
    findMatchingVideo(videos) ||
    findMatchingVideo(usVideos) ||
    findMatchingVideo(auVideos) ||
    findMatchingVideo(deVideos);

  const description = matchedVideo?.snippet?.localized?.description || "";
  const shortDescription = description.split("\n").slice(0, 3).join("\n");
  // ✅ Show shimmer while loading
  if (!matchedVideo) return <WatchPageShimmer />;

  return (
    <div className="pt-7 px-10 flex w-[100px] absolute">
      <span className="w-[300px]">
        <iframe
          className="border-0 rounded-[15px]"
          width="920"
          height="530"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-black w-[895px]">
            {matchedVideo?.snippet?.title}
          </h2>
          <h2 className="text-[18px] text-black">
            {formatViewCount(matchedVideo?.statistics?.viewCount)} •{" "}
            {getTimeAgo(matchedVideo?.snippet?.publishedAt)}
          </h2>

          <div className="flex items-center">
            <div className="flex items-center ">
              <img
                className="h-8 text-2xl mt-1 hover:bg-[#00000015]"
                alt="UserIcon"
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
              />
              <div className="font-bold text-2xl m-4 whitespace-nowrap ">
                {matchedVideo?.snippet?.channelTitle}
              </div>
            </div>
            <div className="ml-2">
              <button className="text-2xl text-white border-2 bg-red-600 hover:bg-red-800 rounded-full px-3 h-10 ml-10">
                Subscribe
              </button>
            </div>
            <div className="flex justify-end w-[800px] ml-[35px]">
              <div className="">
                <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[147.18px] h-10">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-xl" />
                  {matchedVideo?.statistics?.likeCount}
                  {"  |   "}
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="text-xl mx-1"
                  />
                </button>
              </div>

              <div className="ml-auto">
                <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[97.18px] h-10 mx-2">
                  Share
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-xl text-gray-600 hover:text-black"
                  />
                </button>
              </div>

              <div className="ml-auto">
                <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[137.18px] h-10">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="text-xl text-gray-600 hover:text-black mx-2"
                  />
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* <div className="w-[895px] bg-gray-100 hover:bg-gray-200 rounded-[18px] p-4 my-3">
            {matchedVideo?.snippet?.localized?.description}
          </div> */}

          <div className="w-[895px] bg-gray-100 hover:bg-gray-200 rounded-[18px] p-4 my-3 whitespace-pre-wrap transition-all duration-300">
            {showMore ? description : shortDescription}
            {description.split("\n").length > 3 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-blue-600 mt-2 block font-semibold"
              >
                {showMore ? "Show less" : "Show more"}
              </button>
            )}
          </div>

          <CommentContainer />

          <div className="w-[900px]">
            <h1 className="text-2xl font-semibold py-3 px-3 ">{}</h1>
            {Comments.map((com) => {
              const comment = com?.snippet?.topLevelComment?.snippet;
              return (
                <div
                  key={com.id}
                  className="flex items-start mb-4 border-b pb-4 gap-4"
                >
                  <img
                    src={comment?.authorProfileImageUrl}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-800">
                      {comment?.authorDisplayName}
                    </p>
                    <p className="text-gray-700 text-[15px]">
                      {comment?.textDisplay}
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600 text-sm">
                      <span>
                        <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                        {comment?.likeCount}
                      </span>
                      <span className="hover:underline cursor-pointer">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {/* <button>
               <input
                 placeholder="Go to Live Chat"
                 className="border-2 w-[800px] h-[45px] mx-3 px-5 rounded-3xl bg-gray-100 mb-3"
               ></input>{" "}
               <span>
                 <FontAwesomeIcon
                   icon={faPaperPlane}
                   className="text-xl text-blue-500 hover:text-blue-600 cursor-pointer bg-gray-800 rounded-full p-4 mt-1 -mb-4"
                 />
               </span>
             </button> */}
          </div>
        </div>
      </span>
      <div className="flex flex-col ml-[620px]">
        <span>
          {" "}
          <LiveChat />
        </span>
        <span>
          <div>
            <h2 className="font-bold text-center  my-7 mx-5">
              Recommended for you
            </h2>
            {/* <h2 className="mx-5 text-slate-900">Google Developers</h2> */}

            <div className="grid grid-cols-1 w-[200px]">
              {deVideos.map((video) => (
                <div key={video.id} className="mx-2 ">
                  <Link to={"/watch?v=" + video.id}>
                    <WatchPageVideocard info={video} />
                  </Link>
                </div>
              ))}
            </div>
            {playlist.map((play) => (
              <Link to="/" key={play?.id}>
                <div className="flex">
                  <img
                    alt=""
                    src={play?.snippet?.thumbnails?.medium?.url}
                    className="my-1 mx-4 w-[160px] rounded-[12px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:rounded-2xl"
                  />
                  <span>
                    <span className="font-bold text-[16px]">
                      {play?.snippet?.title}
                    </span>
                    <span className="line-clamp-2">
                      {play?.snippet?.description}
                    </span>{" "}
                    <span className="line-clamp-2 mb-4">
                      • {play?.snippet?.channelTitle}
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
};

export default WatchPage;
