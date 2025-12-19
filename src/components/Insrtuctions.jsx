import React from "react";
import { StarBackground } from "./StarBackground";

export const Insrtuctions = () => {
  return (
    <div className="relative w-full min-h-[91vh] text-white text-xl ">
      {/* Star background */}
      <StarBackground heightClass="h-full" />

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-center justify-center px-4 ">
        <div className="flex flex-col gap-3w-full p-4 max-w-md bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 ">
          <div>1 - Click on Lamp, Projects, Chair and Resume for surprise</div>
          <div>2 - For character introduction click on TV</div>
          <div>3 - Try rotating the mouse</div>
          <div>4 - For better visualization on mobile, open in landscape</div>
        </div>
      </div>
    </div>
  );
};
