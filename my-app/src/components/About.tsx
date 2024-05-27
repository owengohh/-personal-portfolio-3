"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import React from "react";
import { Badge } from "../components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import {
	faCss3,
	faFigma,
	faGit,
	faGolang,
	faHtml5,
	faJava,
	faJs,
	faNodeJs,
	faPhp,
	faPython,
	faReact,
	faVuejs,
	faAws,
	faDocker,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const About = () => {
	const frontendIcons = [
		{
			name: "HTML",
			icon: faHtml5,
		},
		{
			name: "CSS",
			icon: faCss3,
		},
		{
			name: "Javascript",
			icon: faJs,
		},
		{
			name: "React",
			icon: faReact,
		},
		{
			name: "Vue",
			icon: faVuejs,
		},
		{
			name: "Figma",
			icon: faFigma,
		},
	];

	const backendIcons = [
		{
			name: "Node.js",
			icon: faNodeJs,
		},
		{
			name: "Golang",
			icon: faGolang,
		},
		{
			name: "Javascript",
			icon: faJs,
		},
		{
			name: "Python",
			icon: faPython,
		},
		{
			name: "Java",
			icon: faJava,
		},
		{
			name: "PHP",
			icon: faPhp,
		},
		{
			name: "mySQL",
			icon: faDatabase,
		},
		{
			name: "Firebase",
			icon: faDatabase,
		},
	];

	const cloudIcons = [
		{
			name: "AWS",
			icon: faAws,
		},
		{
			name: "Docker",
			icon: faDocker,
		},
		{
			name: "Git",
			icon: faGit,
		},
		{
			name: "Github",
			icon: faGithub,
		},
	];

	const [imageWidth, setImageWidth] = useState(500);
	const [imageHeight, setImageHeight] = useState(500);
	useEffect(() => {
		// For example, you can set the width and height based on the window size
		const handleResize = () => {
			setImageWidth(window.innerWidth / 2);
			setImageHeight(window.innerHeight / 2);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const words: string =
		"As a budding software engineer, I am passionate about creating application that are able to solve real world problems and make a difference in peoples lives. Currently, I am a sophemore studying in Software Engineering with a 2nd major in Cybersecurity. I am excited to grow and learn more and looking forward to the opportunities that will come my way.";

	return (
		<div className="bg-secondary grid w-full grid-cols-1 gap-4 rounded-lg p-3 md:grid-cols-2">
			<div className="col-span-1 md:col-span-2">
				<h1 className="text-bold p-3 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					ABOUT ME.
				</h1>
			</div>
			<div className="flex items-center justify-center">
				<Image
					src="/profilepic.png"
					alt=""
					width={imageWidth}
					height={imageHeight}
					className="min-w-xs border-primary m-5 w-full max-w-xl rounded-md border-4 object-cover"
				/>
			</div>
			<div className="flex items-center justify-center">
					<TextGenerateEffect words={words}></TextGenerateEffect>
			</div>
			<hr className="border-primary w-full md:col-span-2" />
			<div className="md:col-span-2">
				<h1 className="text-bold p-3 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					WHAT DO I DO.
				</h1>
				<p className="text-muted-foreground p-3"></p>
			</div>
			<div className="md:col-span-2">
				<h1 className="p-3 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl ">
					Frontend Development.
				</h1>
				<p className="text-muted-foreground p-3">
					I have experience in building responsive and user-friendly web
					applications using HTML, CSS, and JavaScript. I have also worked with
					React and Tailwind CSS to create modern and visually appealing
					websites. I am also familiar with the basics of UI/UX design and have
					experience in creating wireframes and prototypes using Figma.
				</p>
				{frontendIcons.map((icon, index) => (
					<Badge variant="default" className="my-1 mr-2" key={index}>
						<FontAwesomeIcon icon={icon.icon} className="mr-2" />
						<span>{icon.name}</span>
					</Badge>
				))}
			</div>
			<div className="md:col-span-2">
				<h1 className="p-3 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					Backend Development.
				</h1>
				<p className="text-muted-foreground p-3">
					I possess proficiency across multiple languages and frameworks,
					including Node.js, Gin, and Flask, with a focus on crafting RESTful
					APIs and database management. My experience spans MySQL for relational
					databases and Firebase for NoSQL solutions. I am also comfortable in
					Java, Python, Go, PHP and Javascript.
				</p>
				{backendIcons.map((icon, index) => (
					<Badge variant="default" className="my-1 mr-2" key={index}>
						<FontAwesomeIcon icon={icon.icon} className="mr-2" />
						<span>{icon.name}</span>
					</Badge>
				))}
			</div>
			<div className="md:col-span-2">
				<h1 className="p-3 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
					Cloud and DevOps.
				</h1>
				<p className="text-muted-foreground p-3">
					I have experience in deploying applications on cloud platforms such as
					AWS. I have also worked with Docker and Kubernetes to containerize and
					orchestrate applications. I have also worked with Git and CI/CD tools
					such as Github Actions.
				</p>
				{cloudIcons.map((icon, index) => (
					<Badge variant="default" className="my-1 mr-2" key={index}>
						<FontAwesomeIcon icon={icon.icon} className="mr-2" />
						<span>{icon.name}</span>
					</Badge>
				))}
			</div>
			<hr className="border-primary w-full md:col-span-2" />
		</div>
	);
};

export default About;
