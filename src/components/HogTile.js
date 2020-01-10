import React from "react";
import HogStats from "./HogStats.js";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../hog-imgs", false, /\.(png|jpe?g|svg)$/)
);

class HogTile extends React.Component {
  editNameForImg = name => {
    return (
      name
        .split(" ")
        .join("_")
        .toLowerCase() + ".jpg"
    );
  };

  render() {
    return (
      <div className="indexWrapper">
        <ul>
          {this.props.hogs.map(hog => {
            return (
              <li className="pigTile" onClick={this.showStats}>
                <h3>{hog.name}</h3>
                <div className="ui card">
                  <div className="ui slide masked reveal image">
                    <img
                      className="visible content"
                      src={images[this.editNameForImg(hog.name)]}
                    />
                    <div className="hidden content">
                      <h4>Specialty: {hog.specialty}</h4>
                      <h4>Weight: {hog.weight} tonnes of bacon</h4>
                      <h4>Best finish: {hog["highest medal achieved"]}</h4>
                      <h4>
                        {hog.greased === true ? "Greasy Pig!" : "Clean piggy"}
                      </h4>
                    </div>
                  </div>
                </div>
                <button
                // onClick={this.props.hideHog(hog.id)}
                >
                  Hide hog
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HogTile;
