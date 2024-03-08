"use client";

import { Hero } from "../components/Hero";
import About from "../components/About";
export default function Home() {
	return (
		<main>
			<section id="">
				<Hero></Hero>
			</section>
			<section id="about">
				<About></About>
			</section>
		</main>
	);
}
