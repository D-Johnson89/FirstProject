export const chooseBoss = (): string => {
	let randomNumber: number = Math.floor(Math.random() * 100);
	let bossRoom: string = "";
	if (randomNumber >= 50) {
		bossRoom = "B";
	} else if (randomNumber < 50) {
		bossRoom = "A";
	}
	return bossRoom;
};

export const chooseItem = (): string => {
	let randomNumber: number = Math.floor(Math.random() * 100);
	let itemRoom: string = "";
	if (randomNumber >= 50) {
		itemRoom = "B";
	} else if (randomNumber < 50) {
		itemRoom = "A";
	}
	return itemRoom;
};

export const doors: any = [
	{
		clickEvent: () => {
			let boss = chooseBoss();
			console.log(`Returned Boss Room ${boss}"`);
		},
	},
	{
		clickEvent: () => {
			console.log("Clicked 2");
		},
	},
	{
		clickEvent: () => {
			let item = chooseItem();
			console.log(`Returned Item Room ${item}"`);
		},
	},
];
