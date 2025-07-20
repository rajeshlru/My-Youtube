import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="h-[50px]">
      <div className="flex  shadow-inner w-[430px] items-center rounded-[11px] my-1 h-[50px]">
        <div>
          <img
            className="  h-8 text-2xl  mt-1 px-3 "
            alt="UserIcon"
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
          />
        </div>
        <div className="pl-2 flex items-center ">
          <div className="font-thin font-sans text-2xl text-green-300">
            {name}
          </div>
          <div className="px-3 text-gray-600">{message}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
