import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4  mx-2 shadow-inner  bg-[#F8F8F8] hover:bg-[#00000015] rounded-[10px] py-2 mb-2">
      {name}
    </button>
  );
};

export default Button;
