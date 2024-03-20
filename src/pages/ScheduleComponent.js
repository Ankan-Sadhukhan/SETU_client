import React from "react";
import "./card.css";

function ScheduleComponent() {
  return (
    <div className="fig flex h-40 place-content-between">
      <div className="p-8">
        <h1 className="text-white">Your challenges could be unique!</h1>
        <p className="text-gray-500">
          We're your troubleshooting partner, ready to custom design the perfect
          solution for you.
        </p>
      </div>
      <div className="card-actions p-8">
      <button className="btn btn-primary bg-yellow-400 text-black p-2 rounded-lg ">
        Schedule a call
      </button>
      </div>
    </div>
  );
}

export default ScheduleComponent;
