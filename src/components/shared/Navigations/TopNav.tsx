"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

<<<<<<< HEAD
=======
import { Button } from "@/components/ui/button";
>>>>>>> 68501ca (Initial commit)
import { ModeToggle } from "@/components/ui/custom/modeToggle";
import { IMAGES } from "@/constants/files";

import { NavigationMenuConf } from "./NavigationMenu";

const TopNav = () => {
	const route = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);

	return (
		<nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 w-full">
			<div className="mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-14">
					<div className="flex items-center gap-2">
						<Image
							src={IMAGES.blueLogo}
							width={30}
							alt={"logo"}
							onClick={() => route.push("/home")}
						/>
						{/* Display only on medium screens and above */}
						<div className="hidden md:block text-xl font-bold text-primary hover:cursor-pointer mr-6 ">
							Tilla Health Insurance
						</div>
						<div className="hidden md:block">
							<NavigationMenuConf closeMenu={() => setIsMenuOpen(false)} />
						</div>
					</div>

					<div className="mr-0 flex items-center gap-2 md:mr-2">
						<ModeToggle />
						{/* Hamburger Menu Icon */}
<<<<<<< HEAD
						<button className="md:hidden p-2" onClick={toggleMenu}>
							<span>☰</span>
						</button>
=======
						<Button
							className="md:hidden p-2"
							variant="secondary"
							onClick={toggleMenu}
						>
							<span className="text-primary">☰</span>
						</Button>
>>>>>>> 68501ca (Initial commit)
					</div>
				</div>
			</div>

			{/* Dropdown Menu for Mobile */}
			{isMenuOpen && (
<<<<<<< HEAD
				<div className="md:hidden">
=======
				<div className="md:hidden shadow-lg p-4">
>>>>>>> 68501ca (Initial commit)
					<NavigationMenuConf closeMenu={() => setIsMenuOpen(false)} />
				</div>
			)}
		</nav>
	);
};

export default TopNav;
