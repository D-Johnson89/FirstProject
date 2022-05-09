import React from "react";

interface InventoryProps {
  items?: string[];
}

const Inventory = ({ items }: InventoryProps) => {
  return (
    <div style={{ border: "solid black 2px", width: "200px" }}>
      <div style={{ color: "red" }}>Inventory:</div>
      {items?.map((item, index) => (
        <div key={index}>
          <img src="https://via.placeholder.com/50" alt="" />
        </div>
      ))}
    </div>
  );
};

export default Inventory;
