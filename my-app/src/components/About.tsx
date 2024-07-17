"use client";

import React from "react";

import { useState, useEffect } from "react";

import Image from "next/image";

const About = () => {
	return (
		<div className="bg-secondary flex-col items-center flex justify-center p-5">
			<hr className="border-primary w-full" />
			<div className="w-full max-w-4xl py-5">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					<div className="flex items-center justify-center">
						<div
							className="border-primary m-5 max-w-xl border-2 rounded-full overflow-hidden relative"
							style={{ width: "300px", height: "300px" }}>
							<Image
								src="/profilepic.png"
								alt=""
								layout="fill" // This makes the image fill the container
								objectFit="cover" // This ensures the image covers the area without distorting its aspect ratio
							/>
						</div>
					</div>
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-bold text-3xl lg:text-3xl xl:text-3xl 2xl:text-5xl pb-2">
							ABOUT ME
						</h1>
						<p className="pb-2 px-4">
							Junior at Singapore Management University pursuing a degree in
							Software Engineering.
							<br />
							<br />I am passionate about creating applications that are able to
							solve real-world problems and provide value to peoples lives.
							Currently, I am interested in full-stack development and cloud
							computing. I am always looking for opportunities to learn and
							grow.
							<br />
							<br />
              In my free time, I enjoy working out, playing video games and running.
						</p>
					</div>
				</div>
			</div>
			<hr className="border-primary w-full" />
		</div>
	);
};

export default About;
