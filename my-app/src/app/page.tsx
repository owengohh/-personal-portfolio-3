"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Spotify from "@/components/Spotify";
import Experiences from "@/components/Experiences";

const sectionVariants: Variants = {
	hidden: { opacity: 0, scale: 1.2 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

interface AnimatedSectionProps {
	children: React.ReactNode;
	id: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<motion.section
			id={id}
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={sectionVariants}
			className="min-h-[50vh] flex items-center justify-center py-20">
			{children}
		</motion.section>
	);
};

export default function Home() {
	return (
		<main>
			<AnimatedSection id="home">
				<Hero />
			</AnimatedSection>
			<AnimatedSection id="about">
				<About />
			</AnimatedSection>
			<AnimatedSection id="experience">
				<Experiences />
			</AnimatedSection>
			<AnimatedSection id="projects">
				<Projects />
			</AnimatedSection>
			<AnimatedSection id="spotify">
				<Spotify />
			</AnimatedSection>
		</main>
	);
}
