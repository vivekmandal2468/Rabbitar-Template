import React from "react";
import ModeToggle from "./mode-toggle";
// import { MenuToggleButton } from "./navbar";

//yha pr jb bhi mobile menue me X icon khula hoga ye btn gayab
export const Floating_toggle_btn = ({ isHidden }) => {
  if (isHidden) {
    return null;
  } else {
    return (
      <div className="fixed bottom-14 right-7 z-[99] ">
        <button className="bg-black text-white dark:bg-white dark:text-black  absolute text-center justify-center px-3 py-2 rounded-xl right-0 shadow-inner shadow-neutral-500 cursor-pointer">
          <ModeToggle className="size-20 " />
        </button>
      </div>
    );
  }
};
