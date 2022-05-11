import React from "react";

interface InventoryProps {
	items?: string[];
}

const Inventory = ({ items }: InventoryProps) => {
	return (
		<div>
			<div style={{ border: "1px solid white" }}>Inventory:</div>
			{items?.map((item, index) => (
				<div className="items">
					<img
						src="https://via.placeholder.com/40"
						key={index}
						alt=""
					/>
					<div>{item.toUpperCase()}</div>
				</div>
			))}
		</div>
	);
};

export default Inventory;
