import React from "react";
import Card from "./Card";
import Card1 from "./Card1"
import Card2 from "./Card2";

function Body_content() {
  return (
    <div>
      <div className="flex-col">
        <div className="pt-16 ">
          <p className="w-1237px h-32px text-center text-black ">
            SETU transforming Professionals to Pioneer
          </p>
        </div>
        <div className="p-16 justify-center items-center">
          <p className="text-center pl-36 pr-36">
            SETU's AI-driven platform revolutionizes your talent acquisition and
            development. Discover top candidates effortlessly, deliver
            outcome-based training with measurable ROI, and assess both
            technical skills and essential soft skills for data professionals.
          </p>
        </div>
      </div>

      {/* new section */}
      <div className="flex justify-between p-8 ">
        
        
        <Card/>
        <Card1/>
        <Card2/>
      </div>
    </div>
  );
}

export default Body_content;
