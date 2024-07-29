import React, { forwardRef } from "react";

const GameBtn = forwardRef(({ color, border, bg, onClick }, ref) => (
	<button
		color={color}
		className={`${border}  ${bg} w-[175px] sm:w-[200px] h-[175px] sm:h-[200px] m-2`}
		onClick={onClick}
		ref={ref}
	/>
));

export default GameBtn;
