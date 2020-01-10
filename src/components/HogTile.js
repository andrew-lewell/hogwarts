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

  showStats = hog => {};

  render() {
    return (
      <div className="indexWrapper">
        <ul>
          {this.props.hogs.map(hog => {
            return (
              <li className="pigTile" onClick={this.showStats}>
                <div className="ui card">
                  <div className="ui slide masked reveal image">
                    <div className="visible">
                      <h3>{hog.name}</h3>
                      <img src={images[this.editNameForImg(hog.name)]}></img>
                      {console.log(images)}
                    </div>
                    <div className="hidden">
                      <h3>{hog.greased}</h3>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HogTile;
