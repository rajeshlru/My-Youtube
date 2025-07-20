import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const buttons = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "Bollywood",
    "ReactJS",
    "News",
    "Podcasts",
    "Comedy",
    "Programming",
    "New to you",
    "AI",
  ];

  return (
    <div className=" w-[1300px] flex justify-center  fixed h-16 z-20 bg-white   ">
      <div className="flex flex-wrap justify-center my-4">
        {buttons.map((name) => {
          return <Button key={name} name={name} />;
        })}
      </div>
    </div>
  );
};

export default ButtonList;
