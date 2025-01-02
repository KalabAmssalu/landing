"use client";

import React from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export const HeroHighlight = ({
	children,
	className,
	containerClassName,
}: {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: React.MouseEvent<HTMLDivElement>) {
		if (!currentTarget) return;
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	return (
		<div
			className={cn(
<<<<<<< HEAD
				"relative  flex items-center bg-white dark:bg-black justify-center w-full group",
=======
				"relative  flex items-center bg-primary dark:bg-primary justify-center w-full group",
>>>>>>> 68501ca (Initial commit)
				containerClassName
			)}
			onMouseMove={handleMouseMove}
		>
<<<<<<< HEAD
			<div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
=======
			<div className="absolute inset-0 bg-dot-thick-gray-700 dark:bg-dot-thick-neutral-800  pointer-events-none" />
>>>>>>> 68501ca (Initial commit)
			<motion.div
				className="pointer-events-none bg-dot-thick-blue-500 dark:bg-dot-thick-blue-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
					maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
				}}
			/>

			<div className={cn("relative z-20", className)}>{children}</div>
		</div>
	);
};

export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<motion.span
			initial={{
				backgroundSize: "0% 100%",
			}}
			animate={{
				backgroundSize: "100% 100%",
			}}
			transition={{
				duration: 2,
				ease: "linear",
				delay: 0.5,
			}}
			style={{
				backgroundRepeat: "no-repeat",
				backgroundPosition: "left center",
				display: "inline",
			}}
			className={cn(
				"relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-red-300 to-red-500 dark:from-red-500 dark:to-red-700",
				className
			)}
		>
			{children}
		</motion.span>
	);
};
