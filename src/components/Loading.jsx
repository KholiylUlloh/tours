import React from "react";

const Loading = () => {
  return (
    <div className="loader">
      <div className="loader_title">Loading</div>
      <div className="dot_wrap">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
