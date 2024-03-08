import React from "react";


const About = () => {
	return (
		<div className="w-full bg-secondary rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
			<div className="md:col-span-2">
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
					difference in peoples' lives. Currently, I am a sophemore studying in
					Software Engineering with a 2nd major in Cybersecurity. I am excited
					to grow and learn more and looking forward to the opportunities that
					will come my way.
				</p>
			</div>
			<hr className="border-primary col-span-2 w-full" />
			<div className="md:col-span-2">
				<h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl p-3 text-bold">
					WHAT DO I DO.
				</h1>
			</div>
			<div className="flex justify-center items-center">
				
			</div>
		</div>
	);
};

export default About;
