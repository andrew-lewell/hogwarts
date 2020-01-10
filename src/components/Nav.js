import piggy from "../porco.png";
import React from "react";

const Nav = ({
  toggleGreasyFilter,
  greasyFilter,
  handleSortTypeChange,
  sortType
}) => {
  return (
    <div className="navWrapper">
      <div>
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>
      <button onClick={toggleGreasyFilter}>
        {greasyFilter ? "Show all pigs" : "Show greasy pigs"}
      </button>
      {/* <label>
        Default sort:
        <input
          type="radio"
          value="default"
          onChange={handleSortTypeChange}
          checked={sortType === "default"}
        />
      </label> */}
      <label>
        Sort by name:
        <input
          type="radio"
          value="name"
          onChange={handleSortTypeChange}
          checked={sortType === "name"}
        />
      </label>
      <label>
        Sort by weight:
        <input
          type="radio"
          value="weight"
          onChange={handleSortTypeChange}
          checked={sortType === "weight"}
        />
      </label>
    </div>
  );
};

export default Nav;
