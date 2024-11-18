import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from "./ui/navigation-menu";

import { Drawer, DrawerClose, DrawerContent } from "./ui/drawer";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Toggle } from "./ui/toggle";
import Link from "next/link";

export default function Navbar() {
	const navbarClasses = `container fixed top-5 left-0 right-0 z-50 items-center bg-primary text-secondary p-2 transition-all duration-300 rounded-full w-11/12 shadow`;

	const navItems = [
		{ name: "Home", link: "#home" },
		{ name: "About", link: "#about" },
		{ name: "Experiences", link: "#experience" },
		{ name: "Projects", link: "#projects" },
		{ name: "Music", link: "#spotify" },
	];

	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const [isSmallScreen, setIsSmallScreen] = useState(
		typeof window !== "undefined" ? window.innerWidth < 640 : false
	);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsSmallScreen(window.innerWidth < 640);
		};

		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	return (
		<div className={navbarClasses}>
			<div className="w-full">
				<NavigationMenu className="flex min-w-full justify-between">
					<NavigationMenuList className="flex">
						<NavigationMenuItem className="px-3">
							<p>
								<label
									onClick={() => {
										window.location.href = "#home";
									}}>
									Owen Goh
								</label>
							</p>
						</NavigationMenuItem>
					</NavigationMenuList>
					{isSmallScreen ? (
						<NavigationMenuList className="flex items-center">
							<button
								className="p-3"
								onClick={() => {
									setIsDrawerOpen(!isDrawerOpen);
								}}>
								<HamburgerMenuIcon></HamburgerMenuIcon>
							</button>
						</NavigationMenuList>
					) : (
						<NavigationMenuList className="hidden sm:flex ">
							{navItems.map((item, index) => (
								<NavigationMenuItem
									key={index}
									className="px-1">
									<NavigationMenuLink href={item.link}>
										{item.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
							<NavigationMenuItem className="px-1">
								<ThemeToggler />
							</NavigationMenuItem>
						</NavigationMenuList>
					)}
				</NavigationMenu>
			</div>

			<Drawer
				open={isDrawerOpen}
				onOpenChange={setIsDrawerOpen}
				direction="right">
				<DrawerContent>
					<div className="flex flex-col p-4">
						{navItems.map((item, index) => (
							<Toggle key={index}>
								<p key={index} className="p-3">
									<Link href={item.link}>{item.name}</Link>
								</p>
							</Toggle>
						))}
						<Toggle>
							<ThemeToggler />
						</Toggle>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
