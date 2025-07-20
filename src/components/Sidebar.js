import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBolt,
  faShoppingBag,
  faClapperboard,
  faClockRotateLeft,
  faThumbsUp,
  faFire,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  faMusic,
  faGamepad,
  faNewspaper,
  faBasketballBall,
  faFilm,
  faStar,
  faUtensils,
  faBookOpen,
  faBroadcastTower,
  faGear,
  faFlag,
  faCircleQuestion,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const MenuItems = [
    { label: "Home", icon: faHome },
    { label: "Shorts", icon: faBolt },
    { label: "Subscriptions", icon: faClapperboard },
  ];

  const libraryItems = [
    { label: "History", icon: faClockRotateLeft },
    { label: "Playlists", icon: faPlaystation },
    { label: "Your Videos", icon: faClapperboard },
    { label: "Your courses", icon: faGraduationCap },
    { label: "Watch Later", icon: faClockRotateLeft },
    { label: "Liked Videos", icon: faThumbsUp },
  ];
  const exploreItems = [
    { label: "Trending", icon: faFire },
    { label: "Shopping", icon: faShoppingBag },
    { label: "Music", icon: faMusic },
    { label: "Movies", icon: faFilm },
    { label: "Live", icon: faBroadcastTower },
    { label: "Gaming", icon: faGamepad },
    { label: "News", icon: faNewspaper },
    { label: "Sports", icon: faBasketballBall },
    { label: "Fashion & Beauty", icon: faStar },
    { label: "Cooking", icon: faUtensils },
    { label: "Learning", icon: faBookOpen },
  ];
  const socialItems = [
    { label: "YouTube", icon: faYoutube },
    { label: "Facebook", icon: faFacebook },
    { label: "Instagram", icon: faInstagram },
    { label: "TikTok", icon: faTiktok },
    { label: "Twitter (X)", icon: faXTwitter },
  ];
  const settingsItems = [
    { label: "Settings", icon: faGear },
    { label: "Report History", icon: faFlag },
    { label: "Help", icon: faCircleQuestion },
    { label: "Send Feedback", icon: faCommentDots },
  ];
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen)
    return (
      <div>
        <div className="mx-5 my-10 sticky top-20 ml-[43px] pl-4">
          {MenuItems.map((item, index) => (
            <div
              key={index + 1}
              className="flex flex-col items-center  -ml-5 hover:bg-gray-200 rounded-md "
            >
              <FontAwesomeIcon icon={item.icon} className=" text-xl my-4" />
              <span className="text-[12px] ml-[2px]  text-[#0f0f0fe5]">
                {item.label}
              </span>
            </div>
          ))}
          <img
            className="  h-9 mt-1  hover:bg-[#00000015]  -mx-1 w-11  relative top-2"
            alt="UserIcon"
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
          />
        </div>
      </div>
    );

  return (
    <div className="top-20 left-0 h-[91vh]  sticky z-50 w-64 overflow-y-auto  scrollbar-white bg-white shadow-md">
      <div className="mx-5">
        {MenuItems.map((item, index) => (
          <div
            key={index + 1}
            className="flex items-center p-2 hover:bg-gray-200 rounded-md"
          >
            <FontAwesomeIcon icon={item.icon} className="mr-2" />
            <span className="ml-4 text-[#0f0f0fe5]">{item.label}</span>
          </div>
        ))}
      </div>
      <h1 className=" border-[0.2px] mt-4 mb-2 mx-5  w-42 "> </h1>

      <div>
        <div className="text-black  font-semibold py-2 px-5 text-xl hover:bg-gray-200 rounded-md mx-5 ">
          You {""}›
        </div>
        {libraryItems.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="flex items-center p-2 hover:bg-gray-200 rounded-md mx-5"
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              <span className="ml-4 text-[#0f0f0fe5]"> {item.label}</span>
            </div>
          );
        })}
      </div>

      <h1 className=" border-[0.2px] mt-4 mb-2 mx-5 w-42  "> </h1>
      <div>
        {" "}
        <div className="text-black  font-semibold py-2 px-5 text-xl ">
          Explore {""}
        </div>
        {exploreItems.map((item, index) => {
          return (
            <div
              key={index + 1}
              className="flex items-center p-2 hover:bg-gray-200 rounded-md mx-5"
            >
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              <span className="ml-4 text-[#0f0f0fe5]">{item.label}</span>
            </div>
          );
        })}
      </div>
      <h1 className=" border-[0.2px] mt-4 mb-2 mx-5  w-42 "> </h1>
      <div>
        <div className=" ">
          <div className="text-black  font-semibold py-2 px-5 text-xl ">
            Follow us
          </div>
          {socialItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center  py-2 hover:bg-gray-200 rounded-md mx-5 hover:py-2"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="ml-4 text-[#0f0f0fe5]">{item.label}</span>
            </div>
          ))}
        </div>
        <h1 className=" border-[0.2px] mt-4 mb-2 mx-5  w-42 "> </h1>
        <div>
          <div className="text-black font-semibold py-2 px-5 text-xl">
            Settings
          </div>{" "}
          {settingsItems.map((item, index) => (
            <div
              key={index + 1}
              className="flex items-center p-2 hover:bg-gray-200 rounded-md mx-5"
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="ml-4 text-[#0f0f0fe5]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
