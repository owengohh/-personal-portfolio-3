"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	faGolang,
	faHtml5,
	faJava,
	faJs,
	faPython,
	faReact,
	faVuejs,
	faAws,
	faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = () => {
	const GovtechIcons = [
		{
			name: "HTML",
			icon: faHtml5,
		},
		{
			name: "Javascript",
			icon: faJs,
		},
	];

	const Projects = {
		Frontier: {
			icons: [
				{
					name: "AWS",
					icon: faAws,
				},
				{
					name: "Python",
					icon: faPython,
				},
				{
					name: "React",
					icon: faReact,
				},
			],
			link: "",
		},
		TaskForceX: {
			icons: [
				{
					name: "Golang",
					icon: faGolang,
				},
				{
					name: "Vue.js",
					icon: faVuejs,
				},
				{
					name: "Docker",
					icon: faDocker,
				},
			],
		},
		Revente: {
			icons: [
				{
					name: "Javascript",
					icon: faJs,
				},
				{
					name: "Vue.js",
					icon: faVuejs,
				},
			],
			link: "https://smu-wad2.web.app/",
		},
	};
	return (
		<div className="flex justify-center">
			<div className="w-full lg:w-6/12 mx-5">
				<Card
					className="mb-5 border-black"
					onClick={() => {
						window.open("https://www.linkedin.com/in/owengohh");
					}}>
					<CardHeader>
						<CardTitle>Experiences</CardTitle>
						<CardDescription>View my Linkedin here.</CardDescription>
					</CardHeader>
				</Card>
				<Card
					className="mb-5 flex card"
					onClick={() => {
						window.open("https://www.tech.gov.sg/");
					}}>
					<Avatar className="mt-5 ml-5">
						<AvatarImage src="/govtech.png" alt="@govtech" />
					</Avatar>
					<CardHeader>
						<CardTitle>Government Technology Agency</CardTitle>
						<CardDescription>Software Engineer Intern</CardDescription>
						<CardDescription>May 2024 - October 2024</CardDescription>
					</CardHeader>
					<CardContent>
						{GovtechIcons.map((icon, index) => (
							<Badge variant="default" className="my-5 mr-2" key={index}>
								<FontAwesomeIcon icon={icon.icon} className="mr-2" />
								<span>{icon.name}</span>
							</Badge>
						))}
					</CardContent>
				</Card>
				<Card
					className="mb-5 border-black"
					onClick={() => {
						window.open("https://github.com/owengohh");
					}}>
					<CardHeader>
						<CardTitle>Projects</CardTitle>
						<CardDescription>View my Github here.</CardDescription>
					</CardHeader>
				</Card>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div>
						<Card className="lg:h-96 card">
							<CardHeader>
								<CardTitle>Frontier</CardTitle>
								<CardDescription>March 2024 - April 2024</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									An administrative system providing authentication, access
									control and logging of critical actions. Built on AWS services
									such as RDS, Lambda, API Gateway and others.
								</p>
								{Projects.Frontier.icons.map((icon, index) => (
									<Badge variant="default" className="my-5 mr-2" key={index}>
										<FontAwesomeIcon icon={icon.icon} className="mr-2" />
										<span>{icon.name}</span>
									</Badge>
								))}
							</CardContent>
						</Card>
					</div>
					<div>
						<Card className="lg:h-96 card">
							<CardHeader>
								<CardTitle>Task Force X</CardTitle>
								<CardDescription>March 2024 - April 2024</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Task Force X is a web application that helps users manage
									their tasks and projects. The platform allows users to create
									tasks, set deadlines, and track their progress.
								</p>
								{Projects.TaskForceX.icons.map((icon, index) => (
									<Badge variant="default" className="my-5 mr-2" key={index}>
										<FontAwesomeIcon icon={icon.icon} className="mr-2" />
										<span>{icon.name}</span>
									</Badge>
								))}
							</CardContent>
						</Card>
					</div>
					<div>
						<Card
							className="lg:h-96 card"
							onClick={() => {
								window.open(Projects.Revente.link);
							}}>
							<CardHeader>
								<CardTitle>Reventé</CardTitle>
								<CardDescription>August 2023 - November 2023</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Reventé is an E-commerce website dedicated to promoting
									sustainability. The platform was designed to simplify the
									process of upcycling used clothes.
								</p>
								{Projects.Revente.icons.map((icon, index) => (
									<Badge variant="default" className="my-5 mr-2" key={index}>
										<FontAwesomeIcon icon={icon.icon} className="mr-2" />
										<span>{icon.name}</span>
									</Badge>
								))}
							</CardContent>
						</Card>
					</div>
					<div>
						<Card className="lg:h-96 card">
							<CardHeader>
								<CardTitle>Viiicky</CardTitle>
								<CardDescription>August 2023 - August 2023</CardDescription>
							</CardHeader>
							<CardContent>
								<p>
									Web app that assists individuals with colour blindness in
									verifying colours and providing non-colourblind with a
									firsthand experience of what colourblind people sees.
								</p>
								{GovtechIcons.map((icon, index) => (
									<Badge variant="default" className="my-5 mr-2" key={index}>
										<FontAwesomeIcon icon={icon.icon} className="mr-2" />
										<span>{icon.name}</span>
									</Badge>
								))}
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
