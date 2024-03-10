"use client";

import { Hero } from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
export default function Home() {
	return (
		<main>
			<section id="">
				<Hero></Hero>
			</section>
			<section id="about">
				<About></About>
			</section>
			<section id="projects">
				<Projects></Projects>
			</section>
		</main>
	);
}
