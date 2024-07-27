import React from "react";
import GameBtn from "./GameBtn";

const SimonGame = () => {
	return (
		/* Main container */
		<div className=" relative flex justify-center items-center bg-neutral-900 w-screen h-screen">
			{/* Game container */}
			<div className=" relative flex flex-col justify-center items-center animate-spin-slow">
				{/* GameBtn Red, Green */}
				<div className="flex justify-center items-center ">
					<GameBtn color="bg-red-500 rounded-tl-[100%]" />
					<GameBtn color="bg-green-500 rounded-tr-[100%]" />
				</div>
				{/* GameBtn Yellow, Blue */}
				<div className="flex justify-center items-center ">
					<GameBtn color="bg-yellow-500 rounded-bl-[100%]" />
					<GameBtn color="bg-blue-500 rounded-br-[100%]" />
				</div>
				{/* Start Game */}
				<div className="absolute flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<button className="flex justify-center items-center bg-black text-white rounded-full w-24 h-24">
						Start Game
					</button>
				</div>
			</div>
		</div>
	);
};

export default SimonGame;
