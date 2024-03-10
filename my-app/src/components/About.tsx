import React from "react";
import { Badge } from "../components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
	return (
		<div className="w-full bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
			<div className="col-span-1 md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3 text-bold">
					ABOUT ME.
				</h1>
			</div>
			<div className="flex justify-center items-center">
				<img
					src="./profilepic.png"
					alt=""
					className="object-cover rounded-md w-full max-w-xl min-w-xs m-5 border-4 border-primary"
				/>
			</div>
			<div className="flex justify-center items-center">
				<p className="text-muted-foreground">
					As a budding software engineer, I am passionate about creating
					application that are able to solve real world problems and make a
					difference in peoples&apos; lives. Currently, I am a sophemore
					studying in Software Engineering with a 2nd major in Cybersecurity. I
					am excited to grow and learn more and looking forward to the
					opportunities that will come my way.
				</p>
			</div>
			<hr className="border-primary w-full md:col-span-2" />
			<div className="md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3 text-bold">
					WHAT DO I DO.
				</h1>
				<p className="text-muted-foreground p-3"></p>
			</div>
			<div className="md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3 ">
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
					<Badge variant="default" className="mr-2 my-1" key={index}>
						<FontAwesomeIcon icon={icon.icon} className="mr-2" />
						<span>{icon.name}</span>
					</Badge>
				))}
			</div>
			<div className="md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3">
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
					<Badge variant="default" className="mr-2 my-1" key={index}>
						<FontAwesomeIcon icon={icon.icon} className="mr-2" />
						<span>{icon.name}</span>
					</Badge>
				))}
			</div>
			<div className="md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3">
					Cloud and DevOps.
				</h1>
				<p className="text-muted-foreground p-3">
					I have experience in deploying applications on cloud platforms such as
					AWS. I have also worked with Docker and Kubernetes to containerize and
					orchestrate applications. I have also worked with Git and CI/CD tools
					such as Github Actions.
				</p>
				{cloudIcons.map((icon, index) => (
					<Badge variant="default" className="mr-2 my-1" key={index}>
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
