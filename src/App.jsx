import React, { useEffect, useState } from "react";
import GameBtn from "../src/components/Button";

// 5. เอาค่า ที่ blink === user click value ?
// 6. ถ้าเหมือนไปเวลต่อไป
// 6.1 วนกลับไปข้อ 1
// 7. ถ้าไม่เหมือน game over

function SimonGame() {
	// 1. blink random button 1 time
	const [random, setRandom] = useState();
	// 2. เก็บค่าปุ่มที่ blink ครั่้งแรก เก็บ [x]
	const getRandom = [];
	const getUserValue = [];
	getRandom.push(random);

	function randomBlink() {
		let randomNum = Math.floor(Math.random() * 4) + 1;
		setRandom(randomNum);
	}

	useEffect(() => {
		randomBlink();
	}, []);

	function checkValue() {
		/* 		for (let i = 0; i < getRandom.length; i++) {

        } */
		if (getUserValue[0] === getRandom[0]) {
			let message1 = "Good Day";
			console.log(message1);
			return;
		}
		let message2 = "Good evening";
		console.log(message2);
	}

	console.log(getRandom);
	console.log(getUserValue);
	// 3. user click ปุ่มที่ blink
	// 4. check ค่า ปุ่มที่ user กด เก็บ value ที่ user click [?]
	function handleClick(e) {
		const userValue = parseInt(e.target.value);
		getUserValue.push(userValue);
		checkValue();
		console.log(getUserValue);
	}

	return (
		// Main container
		<div className=" flex justfy-center items-center bg-neutral-600">
			SimonGame
			{/*Game container */}
			<div className="flex flex-col justify-center items-center">
				{/*Green and Red container*/}
				<button
					className={`py-16 rounded-lg hover:shadow-md ${
						random === 1
							? "bg-black shadow-[0_0_50px_5px_rgb(34,197,94)]"
							: "bg-green-200"
					}`}
					value={1}
					onClick={handleClick}
				>
					Button 1
				</button>
				<button
					className={`py-16 rounded-lg hover:shadow-md ${
						random === 2
							? "bg-black shadow-[0_0_50px_5px_rgb(200, 20, 20)]"
							: "bg-red-200"
					}`}
					value={2}
					onClick={handleClick}
				>
					Button 2
				</button>
			</div>
			<div className="flex flex-col justify-center items-center">
				{/*Yellow and Blue container*/}
				<button
					className={`py-16 rounded-lg hover:shadow-md ${
						random === 3
							? "bg-black shadow-[0_0_50px_5px_rgb(200,200,0)]"
							: "bg-yellow-200"
					}`}
					value={3}
					onClick={handleClick}
				>
					Button 3
				</button>
				<button
					className={`py-16 rounded-lg hover:shadow-md ${
						random === 4
							? "bg-black shadow-[0_0_50px_5px_rgb(0, 100, 200)]"
							: "bg-blue-200"
					}`}
					value={4}
					onClick={handleClick}
				>
					Button 4
				</button>
			</div>
			{/* <div className="flex flex-col justify-center items-center"></div> */}
		</div>
	);
}

export default SimonGame;
