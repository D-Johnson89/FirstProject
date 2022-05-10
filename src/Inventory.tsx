import React from "react";

interface InventoryProps {
  items?: string[];
}

const Inventory = ({ items }: InventoryProps) => {
  return (
    <div
      style={{
        marginLeft: "0.5rem",
        display: "",
        border: "solid white 2px",
        width: "fit-content",
      }}
    >
      <div>
        <div style={{ color: "red" }}>Inventory:</div>
        <div style={{ display: "flex" }}>
          {items?.map((item, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: ".5rem",
                border: "solid yellow 2px",
                padding: "0.25rem",
              }}
            >
              <img key={index} src="https://via.placeholder.com/50" alt="" />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
