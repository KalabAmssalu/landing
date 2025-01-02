"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/custom/hero-highlight";

interface Option {
	label: string;
	icon?: React.ReactNode;
	onClick: () => void;
}

interface ReusableHeroProps {
	title: string;
	description: string;
	options: Option[];
	footerText: string;
	footerLink: { label: string; href: string };
	className?: string;
}

const ReusableHero: React.FC<ReusableHeroProps> = ({
	title,
	description,
	options,
	footerText,
	footerLink,
	className,
}) => {
	return (
<<<<<<< HEAD
		<HeroHighlight className={`flex items-center h-[40rem]${className || ""}`}>
			<div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
				<h2 className="text-4xl font-extrabold text-primary text-center">
					{title}
				</h2>

				<p className="text-lg font-bold text-center max-w-md">{description}</p>

				<div className="flex justify-center space-x-6">
					{options.map((option, index) => (
						<Button key={index} className="h-10" onClick={option.onClick}>
=======
		<HeroHighlight className={`flex items-center h-screen ${className || ""}`}>
			<div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
				<h2 className="text-4xl font-extrabold text-primary text-white text-center">
					{title}
				</h2>

				<p className="text-lg font-bold text-center max-w-md text-white">
					{description}
				</p>

				<div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-6 space-y-4 md:space-y-0">
					{options.map((option, index) => (
						<Button
							key={index}
							className="h-10 border-2 bg-secondary/40 hover:bg-secondary flex items-center"
							onClick={option.onClick}
						>
>>>>>>> 68501ca (Initial commit)
							{option.label}
							{option.icon && (
								<div className="flex gap-0 ml-2">{option.icon}</div>
							)}
						</Button>
					))}
				</div>

<<<<<<< HEAD
				<footer className="text-sm text-secondary-foreground text-center">
					{footerText}{" "}
					<Link
						href={footerLink.href as `/${string}`}
						className="text-[#5AD3FC] underline"
					>
=======
				<footer className="text-sm text-secondary text-center">
					{footerText}{" "}
					<Link href={footerLink.href as `/${string}`} className="underline">
>>>>>>> 68501ca (Initial commit)
						{footerLink.label}
					</Link>
				</footer>
			</div>
		</HeroHighlight>
	);
};

export default ReusableHero;
