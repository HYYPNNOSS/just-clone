import React from "react";
import { motion } from "framer-motion";

interface AnimatedHamburgerProps {
	isOpen: boolean;
	onClick: () => void;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
	isOpen,
	onClick,
}) => {
	return (
		<div
			className="relative z-30 w-9 cursor-pointer justify-self-end hidden  max-md:block"
			onClick={onClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="40"
				height="40"
				className="transition-opacity duration-200 hover:opacity-80"
			>
				{/* Top line */}
				<motion.line
					x1="4"
					y1="7"
					x2="20"
					y2="7"
					stroke="#444"
					strokeWidth="2.5"
					strokeLinecap="round"
					initial={false}
					animate={{
						x1: isOpen ? 4 : 4,
						x2: isOpen ? 20 : 20,
						y1: isOpen ? 12 : 7,
						y2: isOpen ? 12 : 7,
						rotate: isOpen ? 45 : 0,
					}}
					style={{ originX: "50%", originY: "50%" }}
					transition={{ duration: 0.3 }}
				/>

				{/* Middle line */}
				<motion.line
					x1="4"
					y1="12"
					x2="20"
					y2="12"
					stroke="#444"
					strokeWidth="2.5"
					strokeLinecap="round"
					initial={false}
					animate={{
						opacity: isOpen ? 0 : 1,
					}}
					transition={{ duration: 0.2 }}
				/>

				{/* Bottom line */}
				<motion.line
					x1="4"
					y1="17"
					x2="20"
					y2="17"
					stroke="#444"
					strokeWidth="2.5"
					strokeLinecap="round"
					initial={false}
					animate={{
						x1: isOpen ? 4 : 4,
						x2: isOpen ? 20 : 20,
						y1: isOpen ? 12 : 17,
						y2: isOpen ? 12 : 17,
						rotate: isOpen ? -45 : 0,
					}}
					style={{ originX: "50%", originY: "50%" }}
					transition={{ duration: 0.3 }}
				/>
			</svg>
		</div>
	);
};

export default AnimatedHamburger;
