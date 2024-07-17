import React, { useEffect, useState } from "react";
import { getNowPlaying, getTopTracks } from "../lib/spotify";

function Spotify() {
	const [nowPlaying, setNowPlaying] = useState<any>(null);
	const [topTracks, setTopTracks] = useState<any>(null);
	const [lastPlayed, setLastPlayed] = useState<any>(null);

	useEffect(() => {
		const fetchNowPlaying = async () => {
			try {
				const data = await getNowPlaying();
				if (nowPlaying && data?.title !== nowPlaying.title) {
					// Check if the new song is different
					setLastPlayed(nowPlaying); // Update last played song
				}
				setNowPlaying(data);
			} catch (error) {
				console.error("Failed to fetch now playing:", error);
			}
		};

		const fetchTopTracks = async () => {
			try {
				const data = await getTopTracks();
				setTopTracks(data);
			} catch (error) {
				console.error("Failed to fetch top tracks:", error);
			}
		};

		fetchNowPlaying();
		fetchTopTracks();

		// Fetch now playing data every minute
		const interval = setInterval(() => {
			console.log("fetch");
			fetchNowPlaying();
		}, 60000);

		return () => clearInterval(interval);
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<div className="flex-col items-center flex justify-center p-5">
			<hr className="border-primary w-full" />
				<div className="w-full lg:w-6/12 m-5">
					<div className="bg-secondary shadow-md rounded-lg overflow-hidden mb-5">
						<h3 className="text-lg font-semibold pt-5 px-5">
							{nowPlaying?.title
								? "Currently listening to..."
								: "Last listened to..."}
						</h3>
						{nowPlaying?.title ? (
							<div className="flex justify-between items-center p-5">
								<div>
									<p className="text-gray-900 dark:text-gray-200">
										{nowPlaying.title}
									</p>
									<p className="text-gray-600 dark:text-gray-400">
										{nowPlaying.artist}
									</p>
								</div>
								{nowPlaying.albumImageUrl && (
									<img
										src={nowPlaying.albumImageUrl}
										alt="Album cover"
										className="w-24 h-24 object-cover ml-4 rounded-md"
									/>
								)}
							</div>
						) : lastPlayed ? (
							<div className="flex justify-between items-center p-5">
								<div>
									<p className="text-gray-900 dark:text-gray-200">
										{lastPlayed.title}
									</p>
									<p className="text-gray-600 dark:text-gray-400">
										{lastPlayed.artist}
									</p>
								</div>
								{lastPlayed.albumImageUrl && (
									<img
										src={lastPlayed.albumImageUrl}
										alt="Album cover"
										className="w-24 h-24 object-cover ml-4 rounded-md"
									/>
								)}
							</div>
						) : (
							<p className="text-center p-5">No song data available.</p>
						)}
					</div>

					<div className="bg-secondary shadow-md rounded-lg overflow-hidden">
						<h3 className="text-xl font-semibold pt-5 px-5 text-gray-900 dark:text-gray-200">
							Top tracks
						</h3>
						{topTracks !== null ? (
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								{topTracks.map((track: any, index: any) => (
									<li key={index} className="p-4 flex items-center">
										<span className="text-sm font-medium mr-4">
											{index + 1}.
										</span>
										<img
											src={track.albumImageUrl}
											alt="Album cover"
											className="w-12 h-12 object-cover rounded-md"
										/>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-900 dark:text-gray-200">
												{track.title}
											</p>
											<p className="text-sm text-gray-600 dark:text-gray-400">
												{track.artist}
											</p>
										</div>
									</li>
								))}
							</ul>
						) : (
							<p className="text-center p-5 text-gray-600 dark:text-gray-400">
								No top tracks to display.
							</p>
						)}
					</div>

			</div>
			<hr className="border-primary w-full" />
		</div>
	);
}

export default Spotify;
