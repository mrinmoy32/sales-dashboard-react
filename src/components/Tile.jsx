import React from "react";
import "./Tile.css";

function Tile({ icon, color, title, value }) {
  return (
    <div className={`tile ${color}`}>
      <div className="tile-icon">
        {/* Use an icon component or image */}
        <img src={icon} alt={title} />
      </div>
      <div className="tile-content">
        <div className="tile-title">{title}</div>
        <div className="tile-value">{value}</div>
      </div>
    </div>
  );
}

export default Tile;
