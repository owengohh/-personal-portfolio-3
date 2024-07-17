"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Spotify from "@/components/Spotify";
export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
		});
	}, []);
	return (
		<main>
			<section id="home" data-aos="fade-up">
				<Hero></Hero>
			</section>
			<section id="about" className="pt-20" data-aos="fade-up">
				<About></About>
			</section>
			<section id="projects" className="pt-20" data-aos="fade-up">
				<Projects></Projects>
			</section>
			<section id="spotify" className="pt-20" data-aos="fade-up">
				<Spotify />
			</section>
		</main>
	);
}
