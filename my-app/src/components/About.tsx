import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	Gamepad,
	GraduationCap,
	Code,
	Cloud,
	Dumbbell,
	Heart,
} from "lucide-react";
import React from "react";
import Image from 'next/image';

export default function Component() {
	return (
		<section className="w-full max-w-4xl mx-auto p-6">
			<div className="text-center space-y-8">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-muted" />
					</div>
					<div className="relative flex justify-center">
						<h2 className="bg-background px-6 text-3xl font-bold tracking-tight">
							About Me
						</h2>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
					<div className="relative group">
						<div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/50 to-primary opacity-75 blur transition duration-500 group-hover:opacity-100" />
                        <div className="relative aspect-square w-48 md:w-64 rounded-full overflow-hidden border-4 border-background">
                            <Image
                                alt="Profile picture"
                                className="object-cover"
                                src="/profilepic.png"
                                layout="fill"
                            />
                        </div>
					</div>

					<div className="space-y-4 text-left flex-1">
						<div className="space-y-2">
							<div className="flex items-center gap-2 text-lg">
								<GraduationCap className="h-5 w-5 text-primary" />
								<span className="font-medium">Education</span>
							</div>
							<p className="text-muted-foreground">
								Junior at Singapore Management University
								pursuing a degree in Software Engineering.
							</p>
						</div>

						<div className="space-y-2">
							<div className="flex items-center gap-2 text-lg">
								<Heart className="h-5 w-5 text-primary" />
								<span className="font-medium">Passion</span>
							</div>
							<p className="text-muted-foreground">
								I am passionate about creating applications that
								are able to solve real-world problems and
								provide value to peoples lives.
							</p>
						</div>

						<div className="space-y-2">
							<div className="flex items-center gap-2 text-lg">
								<Code className="h-5 w-5 text-primary" />
								<span className="font-medium">Interests</span>
							</div>
							<div className="flex flex-wrap gap-2">
								<Badge variant="secondary">
									Full-stack Development
								</Badge>
								<Badge variant="secondary">
									Cloud Computing
								</Badge>
								<Badge variant="secondary">
									Problem Solving
								</Badge>
								<Badge variant="secondary">UI/UX Design</Badge>
							</div>
						</div>

						<Card className="bg-muted/50">
							<CardContent className="p-4">
								<div className="flex items-center gap-2 text-lg mb-2">
									<Dumbbell className="h-5 w-5 text-primary" />
									<span className="font-medium">Hobbies</span>
								</div>
								<div className="flex flex-wrap gap-4">
									<div className="flex items-center gap-2">
										<Dumbbell className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm text-muted-foreground">
											Working out
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Gamepad className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm text-muted-foreground">
											Video games
										</span>
									</div>
									<div className="flex items-center gap-2">
										<Cloud className="h-4 w-4 text-muted-foreground" />
										<span className="text-sm text-muted-foreground">
											Running
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
