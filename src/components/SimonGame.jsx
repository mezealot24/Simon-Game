import React, { useState, useRef, useEffect } from "react";
import GameBtn from "./GameBtn";

const colors = ["green", "red", "yellow", "blue"];

const SimonGame = () => {
	// states
	const [sequence, setSequence] = useState([]);
	const [playing, setPlaying] = useState(false);
	const [playerSequence, setPlayerSequence] = useState([]);

	// refs
	const redRef = useRef(null);
	const greenRef = useRef(null);
	const yellowRef = useRef(null);
	const blueRef = useRef(null);

	// functions
	const addNewColor = () => {
		const color = colors[Math.floor(Math.random() * 4)];
		setSequence((prevSequence) => [...prevSequence, color]);
	};

	const resetGame = () => {
		setSequence([]);
		setPlaying(false);
		setPlayerSequence([]);
	};

	const blinkButton = (color) => {
		let ref = null;
		if (color === "green") ref = greenRef;
		if (color === "red") ref = redRef;
		if (color === "yellow") ref = yellowRef;
		if (color === "blue") ref = blueRef;

		ref.current.classList.add("brightness-[2.5]");
		setTimeout(() => {
			ref.current.classList.remove("brightness-[2.5]");
		}, 250);
	};

	useEffect(() => {
		if (sequence.length > 0) {
			const lastColor = sequence[sequence.length - 1];
			blinkButton(lastColor);
		}
	}, [sequence]);

	const handleNextLevel = () => {
		if (!playing) {
			setPlaying(true);
			addNewColor();
		}
	};

	const handleColorClick = (e) => {
		if (playing) {
			const clickColor = e.target.getAttribute("color");
			const newPlayerSequence = [...playerSequence, clickColor];
			setPlayerSequence(newPlayerSequence);

			// Check if the clicked color matches the sequence
			if (clickColor !== sequence[playerSequence.length]) {
				alert("Game Over! Your score: " + (sequence.length - 1));
				resetGame();
			} else if (newPlayerSequence.length === sequence.length) {
				// Player completed the sequence correctly
				setPlayerSequence([]);
				setTimeout(() => {
					addNewColor();
				}, 250);
			}
		}
	};

	return (
		/* Main container */
		<div className="relative flex justify-center items-center bg-neutral-900 w-screen h-screen">
			{/* Game container */}
			<div className="relative flex flex-col justify-center items-center animate-spin-slow">
				{/* GameBtn Green,Red */}
				<div className="flex justify-center items-center ">
					<GameBtn
						color="green"
						bg="bg-green-400"
						border=" rounded-tl-full"
						ref={greenRef}
						onClick={handleColorClick}
					/>
					<GameBtn
						color="red"
						bg="bg-red-400"
						border=" rounded-tr-full"
						ref={redRef}
						onClick={handleColorClick}
					/>
				</div>
				{/* GameBtn Yellow, Blue */}
				<div className="flex justify-center items-center ">
					<GameBtn
						color="yellow"
						bg="bg-yellow-400"
						border=" rounded-bl-full"
						ref={yellowRef}
						onClick={handleColorClick}
					/>
					<GameBtn
						color="blue"
						bg="bg-blue-400"
						border=" rounded-br-full"
						ref={blueRef}
						onClick={handleColorClick}
					/>
				</div>
				{/* Start Game */}
				<div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<button
						className="flex justify-center items-center bg-black text-white text-xl sm:text-2xl font-bold rounded-full w-[150px] sm:w-[175px] h-[150px] sm:h-[175px] duration-200 hover:scale-105"
						onClick={handleNextLevel}
					>
						{sequence.length === 0 ? "Start Game" : `Level: ${sequence.length}`}
					</button>
				</div>
			</div>
		</div>
	);
};

export default SimonGame;
