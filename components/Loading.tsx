import React from "react";

const Loading = () => {
  return (
    <div className="text-xl font-bold text-text">
      Thinking
      <span className="animate-pulse delay-2s">.</span>
      <span className="animate-pulse delay-4s">.</span>
      <span className="animate-pulse delay-6s">.</span>
    </div>
  );
};

export default Loading;
