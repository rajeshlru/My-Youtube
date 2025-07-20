import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./appSlice"; // Adjust the import path as necessary
import { SEARCH_API } from "./utils/constants";
import { cacheresults } from "./searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchcache = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[searchQuery]) {
        setSuggestions(searchcache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    //   console.log("API CALL-" + searchQuery);
    //   const data = await (SEARCH_API + searchQuery);
    //   const json = await data.json();
    //   console.log(json);

    try {
      console.log("API CALL - " + searchQuery);
      const response = await fetch(SEARCH_API + searchQuery);
      const json = await response.json();
      console.log(json);
      setSuggestions(json[1]);
      dispatch(
        cacheresults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  return (
    <div className="grid grid-flow-col pt-5 sticky top-0 z-50 bg-white shadow ">
      <div className="flex col-span-1  h-6 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8  mx-6 cursor-pointer hover:bg-[#00000015] rounded-full px-2 py-1"
          alt="HamburgerIcon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-7 "
          alt="ImageLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
        />
      </div>
      <div className="col-span-10 h-10 flex justify-center ">
        <input
          className="w-[576px] px-3 bg-[#FFFFFF]  text-[#0f0F0F] border-2 border-gray-300 rounded-l-full hover:border-blue-300 focus:border-blue-300 active:border-blue-300 outline-none shadow-inner"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>
        <button className="h-10 bg-[#F8F8F8] hover:bg-[#0000000D] border-2 w-10 pr-10 pl-6 rounded-r-full  shadow-sm">
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </button>
        <div className="absolute top-[44px] w-[579px] bg-white border border-gray-200 rounded-b-[14px] rounded-tl-lg shadow-md z-50 -ml-12  mt-4 mr-5 list-none px-1">
          {showSuggestions &&
            suggestions.map((s) => (
              <li
                key={s}
                className="w-[] h-[40px]  hover:bg-[#00000015] hover:rounded-[12px] py-2"
              >
                {" "}
                <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-3" />
                {s}
              </li>
            ))}
        </div>
      </div>

      <div className="col-span-1  flex justify-between pr-10">
        <button className="border-2 bg-[#F8F8F8] hover:bg-[#00000015] rounded-full w-[97.18px] h-10 ">
          + Create
        </button>
        <span className=" hover:bg-[#0000000D] hover:border-9 hover:rounded-full hover:h-13">
          {" "}
          <FontAwesomeIcon icon={faBell} className="text-2xl m-4 mt-2" />
        </span>
        <img
          className="  h-8 text-2xl  mt-1  hover:bg-[#00000015]"
          alt="UserIcon"
          src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
