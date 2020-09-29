import React from "react";
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={` icon-left massive ${icon} icon`} />
      <h1>{season === "winter" ? "Iit's chilly" : "Oh it's hot"}</h1>
      <i className={`icon-right massive ${icon} icon`} />
    </div>
  );
}

export default SeasonDisplay;
