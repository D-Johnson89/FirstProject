import React from "react";
import Inventory from "./Inventory";

interface PlayerProps {
  name: string;
  inventory?: string[];
  img: any;
}

const Player = ({ name, inventory, img }: PlayerProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "fit-content",
        border: "solid green 2px",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid 3px orange",
        }}
      >
        <img src={img} alt="player" />
        <div>{name}</div>
      </div>

      <Inventory items={inventory} />
    </div>
  );
};

export default Player;
