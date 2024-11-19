"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Experiences", href: "#experience" },
	{ name: "Projects", href: "#projects" },
	{ name: "Music", href: "#spotify" },
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	return (
		<motion.header
			className="sticky top-4 z-50 w-full px-4"
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-secondary px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl">
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					<Link
						href="#home"
						className="text-xl font-bold text-secondary-foreground">
						Owen Goh
					</Link>
				</motion.div>
				<div className="hidden items-center space-x-1 md:flex">
					{navItems.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<Link
								href={item.href}
								className="relative rounded-full px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary-foreground/10">
								{item.name}
								<motion.span
									className="absolute bottom-0 left-0 h-[2px] w-full bg-primary"
									initial={{ scaleX: 0 }}
									whileHover={{ scaleX: 1 }}
									transition={{ duration: 0.2 }}
								/>
							</Link>
						</motion.div>
					))}
					<ThemeToggle />
				</div>
				<div className="md:hidden">
					<DropdownMenu
						open={isMobileMenuOpen}
						onOpenChange={setIsMobileMenuOpen}>
						<DropdownMenuTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="text-secondary-foreground">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<AnimatePresence>
							{isMobileMenuOpen && (
								<DropdownMenuContent
									align="end"
									className="w-[200px] bg-secondary"
									asChild>
									<motion.div
										initial={{ opacity: 0, scale: 0.95 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.95 }}
										transition={{ duration: 0.2 }}>
										{navItems.map((item) => (
											<DropdownMenuItem
												key={item.name}
												asChild>
												<Link
													href={item.href}
													className="w-full text-secondary-foreground"
													onClick={() =>
														setIsMobileMenuOpen(
															false
														)
													}>
													{item.name}
												</Link>
											</DropdownMenuItem>
										))}
										<DropdownMenuItem>
											<ThemeToggle />
										</DropdownMenuItem>
									</motion.div>
								</DropdownMenuContent>
							)}
						</AnimatePresence>
					</DropdownMenu>
				</div>
			</nav>
		</motion.header>
	);
}

function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<motion.div whileTap={{ scale: 0.9 }}>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				className="rounded-full text-secondary-foreground">
				<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		</motion.div>
	);
}
