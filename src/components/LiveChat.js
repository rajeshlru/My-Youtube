import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import { randomnamegenerate, randomtextgenerate } from "./utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();
  const [liveMessages, setLiveMessages] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      console.log("API POLLING");

      dispatch(
        addMessage({
          name: randomnamegenerate(),
          message: randomtextgenerate(14) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="ml-[428px]   ">
      <div
        className="-ml-[400px]   -pl-[400px]   p-4 pt-3  text-xl border-2 rounded-[18px]  bg-slate-100  h-[601px] w-[500px] cursor-auto  scrollbar-white"
        onMouseEnter={() => {
          // Prevent page scroll when chat hovered
          document.body.style.overflow = "hidden";
        }}
        onMouseLeave={() => {
          // Re-enable scroll when mouse leaves
          document.body.style.overflow = "auto";
        }}
      >
        <h1 className="mb-3 text-xl font-sans font-bold mx-1 border-b-[1px] border-black">
          Live Chat
        </h1>
        <div className="overflow-y-scroll h-[470px] flex flex-col-reverse">
          <div className="">
            {chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
          </div>
        </div>
        <form
          className=" border-0  border-black border-t-[1px] -mx-4 px-1 items-center pt-2 "
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Rajesh",
                message: liveMessages,
              })
            );
            setLiveMessages("");
          }}
        >
          <button>
            <input
              value={liveMessages}
              onChange={(e) => setLiveMessages(e.target.value)}
              placeholder="Go to Live Chat"
              className="border-2 w-[310px] h-[45px] mx-3 px-5 rounded-3xl bg-gray-100 mb-3"
            ></input>{" "}
            <span>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="text-xl text-blue-500 hover:text-blue-600 cursor-pointer bg-gray-800 rounded-full p-4 pl-4 mt-1 -mb-4"
              />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
