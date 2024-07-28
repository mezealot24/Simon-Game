import React, { useState, useRef, useEffect } from "react";
import GameBtn from "./GameBtn";

const colors = ["green", "red", "yellow", "blue"];

const SimonGame = () => {
	//states
	const [sequence, setSequence] = useState([]);
	const [playing, setPlaying] = useState(false);

	// refs
	const greenRef = useRef(null);
	const redRef = useRef(null);
	const yellowRef = useRef(null);
	const blueRef = useRef(null);

	//functions
	const addNewColor = () => {
		const color = colors[Math.floor(Math.random() * 4)];
		const newSequnce = [...sequence, color];
		setSequence(newSequnce);
	};

	// useEffect
	useEffect(() => {
		// show sequence
		const showSequence = () => {};
		showSequence();
	}, [sequence]);

	const handleNextLevel = () => {
		if (!playing) {
			addNewColor();
		}
	};

	return (
		/* Main container */
		<div className=" relative flex justify-center items-center bg-neutral-900 w-screen h-screen">
			{/* Game container */}
			<div className=" relative flex flex-col justify-center items-center animate-spin-slow">
				{/* GameBtn Red, Green */}
				<div className="flex justify-center items-center ">
					<GameBtn color="bg-red-500 rounded-tl-[100%]" ref={redRef} />
					<GameBtn color="bg-green-500 rounded-tr-[100%]" ref={greenRef} />
				</div>
				{/* GameBtn Yellow, Blue */}
				<div className="flex justify-center items-center ">
					<GameBtn color="bg-yellow-500 rounded-bl-[100%]" ref={yellowRef} />
					<GameBtn color="bg-blue-500 rounded-br-[100%]" ref={blueRef} />
				</div>
				{/* Start Game */}
				<div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<button
						className="flex justify-center items-center bg-black text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duaration-200 hover:scale scale-105"
						onClick={handleNextLevel}
					>
						Start Game
					</button>
				</div>
			</div>
		</div>
	);
};

export default SimonGame;
