"use client";

import { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ExternalLink,
	Calendar,
	Github,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Component() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [expandedId, setExpandedId] = useState<number | null>(null);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
	}, [emblaApi, onSelect]);

	const projects = [
		{
			id: 1,
			name: "Frontier",
			date: "March 2024 - April 2024",
			description:
				"An administrative system providing authentication, access control and logging of critical actions. Built on AWS services such as RDS, Lambda, API Gateway and others.",
			tech: ["AWS", "Python", "React"],
			image: "/frontier.png?height=600&width=800",
			link: "#",
			github: "#",
		},
		{
			id: 2,
			name: "Task Force X",
			date: "March 2024 - April 2024",
			description:
				"Task Force X is a web application that helps users manage their tasks and projects. The platform allows users to create tasks, set deadlines, and track their progress.",
			tech: ["Golang", "Vue.js", "Docker"],
			image: "/taskforcex.png?height=600&width=800",
			link: "#",
			github: "#",
		},
		{
			id: 3,
			name: "Reventé",
			date: "August 2023 - November 2023",
			description:
				"Reventé is an E-commerce website dedicated to promoting sustainability. The platform was designed to simplify the process of upcycling used clothes.",
			tech: ["Javascript", "Vue.js"],
			image: "/revente.png?height=600&width=800",
			link: "https://smu-wad2.web.app/",
			github: "https://github.com/Terristwj/Revente",
		},
	];

	return (
		<section className="w-full max-w-4xl mx-auto p-6 space-y-8">
			<div className="space-y-2">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-muted" />
					</div>
					<div className="relative flex justify-center">
						<h2 className="bg-background px-6 text-3xl font-bold tracking-tight">
							Past Projects
						</h2>
					</div>
				</div>
				<p className="text-muted-foreground pt-2">
					Explore my latest work and side projects.{" "}
					<Link
						href="#"
						className="inline-flex items-center gap-1 text-primary hover:underline">
						View my Github profile
						<Github className="w-3 h-3" />
					</Link>
				</p>
			</div>

			<div className="relative">
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex">
						{projects.map((project) => (
							<div
								key={project.id}
								className="flex-[0_0_100%] min-w-0 sm:pl-8 first:pl-0">
								<Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card h-full">
									<CardContent className="p-0 h-full">
										<div className="grid md:grid-cols-2 h-full">
											<div className="aspect-video md:aspect-auto bg-muted relative overflow-hidden">
												<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 z-10" />
												<Image
													src={project.image}
													alt={`${project.name} preview`}
													layout="fill"
													objectFit="cover"
													className="transform group-hover:scale-105 transition-transform duration-300"
												/>
												<div className="absolute bottom-4 left-4 right-4 z-20 md:hidden">
													<h3 className="text-xl font-semibold text-white mb-2">
														{project.name}
													</h3>
													<div className="flex items-center gap-2 text-sm text-white/80">
														<Calendar className="w-4 h-4" />
														<span>
															{project.date}
														</span>
													</div>
												</div>
											</div>

											<div className="p-6 space-y-4 flex flex-col">
												<div className="hidden md:block">
													<h3 className="text-xl font-semibold mb-2">
														{project.name}
													</h3>
													<div className="flex items-center gap-2 text-sm text-muted-foreground">
														<Calendar className="w-4 h-4" />
														<span>
															{project.date}
														</span>
													</div>
												</div>

												<AnimatePresence>
													{expandedId ===
													project.id ? (
														<motion.p
															initial={{
																opacity: 0,
																height: 0,
															}}
															animate={{
																opacity: 1,
																height: "auto",
															}}
															exit={{
																opacity: 0,
																height: 0,
															}}
															transition={{
																duration: 0.3,
															}}
															className="text-sm text-muted-foreground leading-relaxed flex-grow">
															{
																project.description
															}
														</motion.p>
													) : (
														<p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
															{
																project.description
															}
														</p>
													)}
												</AnimatePresence>

												<div className="flex flex-wrap gap-2">
													{project.tech.map(
														(tech) => (
															<Badge
																key={tech}
																variant="secondary">
																{tech}
															</Badge>
														)
													)}
												</div>

												<div className="flex items-center justify-between pt-4">
													<Button
														variant="ghost"
														size="sm"
														onClick={() =>
															setExpandedId(
																expandedId ===
																	project.id
																	? null
																	: project.id
															)
														}>
														{expandedId ===
														project.id
															? "Show less"
															: "Read more"}
													</Button>
													<div className="flex items-center gap-2">
														{project.github !==
															"#" && (
															<Button
																variant="ghost"
																size="icon"
																asChild>
																<Link
																	href={
																		project.github
																	}>
																	<Github className="h-4 w-4" />
																	<span className="sr-only">
																		View
																		Github
																		repository
																	</span>
																</Link>
															</Button>
														)}
														{project.link !==
															"#" && (
															<Button
																variant="ghost"
																size="icon"
																asChild>
																<Link
																	href={
																		project.link
																	}>
																	<ExternalLink className="h-4 w-4" />
																	<span className="sr-only">
																		Visit
																		live
																		project
																	</span>
																</Link>
															</Button>
														)}
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
				<Button
					variant="outline"
					size="icon"
					className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
					onClick={scrollPrev}>
					<ChevronLeft className="h-4 w-4" />
					<span className="sr-only">Previous project</span>
				</Button>
				<Button
					variant="outline"
					size="icon"
					className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
					onClick={scrollNext}>
					<ChevronRight className="h-4 w-4" />
					<span className="sr-only">Next project</span>
				</Button>
			</div>

			<div className="flex justify-center gap-2">
				{projects.map((_, index) => (
					<Button
						key={index}
						variant="ghost"
						size="icon"
						className={`w-3 h-3 rounded-full p-0 ${
							index === selectedIndex ? "bg-primary" : "bg-muted"
						}`}
						onClick={() => emblaApi?.scrollTo(index)}>
						<span className="sr-only">Go to slide {index + 1}</span>
					</Button>
				))}
			</div>
		</section>
	);
}
