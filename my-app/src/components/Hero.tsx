"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
	const words = [
		{
			text: "HI",
		},
		{
			text: "THERE,",
		},

		{
			text: "I",
		},
		{
			text: "AM",
		},
		{
			text: "OWEN",
			className: "text-neutral-500",
		},
	];
	return (
		<div className="flex flex-col items-center justify-center h-screen ">
			<TypewriterEffect words={words} />
			<p className="text-neutral-600 dark:text-neutral-200 text-base mt-10">
				Welcome to my personal portfolio website :-)
			</p>
			<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
				<button
					className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transform transition duration-300 hover:scale-105"
					onClick={() => {
						window.open("https://github.com/owengohh");
					}}>
					Github
				</button>
				<button
					className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm transform transition duration-300 hover:scale-105"
					onClick={() => {
						window.open("https://www.linkedin.com/in/owengohh");
					}}>
					Linkedin
				</button>
			</div>
		</div>
	);
}
