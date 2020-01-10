import React from "react";
import HogTile from "./HogTile.js";

const HogContainer = ({ hogs }) => {
  return (
    <div className="indexWrapper">
      <ul>
        <HogTile hogs={hogs} />
      </ul>
    </div>
  );
};

export default HogContainer;
