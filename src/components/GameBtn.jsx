import React from "react";

const GameBtn = ({ border, color, onClick }) => {
	return (
		<button
			className={`${border}  ${color} ${onClick} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2`}
		></button>
	);
};

export default GameBtn;
