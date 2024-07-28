import React, { forwardRef } from "react";

const GameBtn = forwardRef(({ border, color, onClick }) => (
	<button
		className={`${border}  ${color} ${onClick} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2`}
		onClick={onClick}
	/>
));

export default GameBtn;
