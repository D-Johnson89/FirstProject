import React from "react";

interface InventoryProps {
	items?: string[];
}

const Inventory = ({ items }: InventoryProps) => {
	return (
		<div>
			<div>Inventory:</div>
			{items?.map((item, index) => (
				<img src="https://via.placeholder.com/40" key={index} alt="" />
			))}
		</div>
	);
};

export default Inventory;
