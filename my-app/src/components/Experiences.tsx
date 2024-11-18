"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Experiences() {
	const [expandedId, setExpandedId] = useState<number | null>(null);

	const experiences = [
		{
			id: 1,
			company: "Government Technology Agency",
			role: "Software Engineer Intern",
			logo: "/govtech.png",
			location: "Singapore",
			startDate: "May 2024",
			endDate: "October 2024",
			description:
				"Working on innovative digital solutions to improve public services and government operations. Focusing on frontend development and user experience design.",
			skills: ["HTML", "JavaScript", "React", "TypeScript", "UI/UX"],
		},
		// Add more experiences here
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
							Work Experience
						</h2>
					</div>
				</div>
				<p className="text-muted-foreground pt-2">
					Explore my professional journey and key contributions.{" "}
					<Link
						href="#"
						className="inline-flex items-center gap-1 text-primary hover:underline">
						View my full LinkedIn profile
						<ExternalLink className="w-3 h-3" />
					</Link>
				</p>
			</div>

			<div className="space-y-6">
				{experiences.map((exp) => (
					<Card
						key={exp.id}
						className="overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300">
						<CardContent className="p-0">
							<div className="flex flex-col md:flex-row">
								<div className="md:w-1/3 bg-muted p-6 flex items-center justify-center">
									<div className="w-24 h-24 rounded-full border-4 border-background shadow-lg overflow-hidden">
										<Image
											alt={`${exp.company} logo`}
											className="w-full h-full object-cover"
											src={exp.logo}
											width={96}
											height={96}
										/>
									</div>
								</div>
								<div className="flex-1 p-6 space-y-4">
									<div>
										<h3 className="text-xl font-semibold">
											{exp.company}
										</h3>
										<p className="text-primary">
											{exp.role}
										</p>
										<div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
											<MapPin className="w-4 h-4" />
											<span>{exp.location}</span>
										</div>
										<div className="mt-1 text-sm text-muted-foreground">
											{exp.startDate} - {exp.endDate}
											{exp.endDate === "Present" && (
												<Badge
													variant="secondary"
													className="ml-2">
													Current
												</Badge>
											)}
										</div>
									</div>

									<AnimatePresence>
										{expandedId === exp.id && (
											<motion.div
												initial={{
													opacity: 0,
													height: 0,
												}}
												animate={{
													opacity: 1,
													height: "auto",
												}}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className="space-y-2">
												<p className="text-sm text-muted-foreground leading-relaxed">
													{exp.description}
												</p>
												<div className="flex flex-wrap gap-2">
													{exp.skills.map((skill) => (
														<Badge
															key={skill}
															variant="outline">
															{skill}
														</Badge>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>

									<div className="pt-4">
										<Button
											variant="ghost"
											size="sm"
											onClick={() =>
												setExpandedId(
													expandedId === exp.id
														? null
														: exp.id
												)
											}
											className="text-primary">
											{expandedId === exp.id ? (
												<>
													Less details
													<ChevronUp className="ml-2 h-4 w-4" />
												</>
											) : (
												<>
													More details
													<ChevronDown className="ml-2 h-4 w-4" />
												</>
											)}
										</Button>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
