import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="fixed">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </div>
  );
};

export default Loading;
