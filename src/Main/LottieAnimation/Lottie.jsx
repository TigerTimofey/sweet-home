import React from "react";
import medidate from "./meditation.gif";
function Lottie() {
  return (
    <div>
      {/* Make sure the path to your GIF is correct */}
      <img src={medidate} alt="meditation" />
    </div>
  );
}

export default Lottie;
