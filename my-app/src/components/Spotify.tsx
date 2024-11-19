import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Pause,
	Play,
	Repeat,
	Shuffle,
	SkipBack,
	SkipForward,
	Volume2,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import {
	getNowPlaying,
	getTopTracks,
	getLastPlayed,
	SpotifyTrack,
} from "@/lib/spotify";

export default function Component() {
	const [nowPlaying, setNowPlaying] = useState<SpotifyTrack | null>();
	const [topTracks, setTopTracks] = useState<SpotifyTrack[]>([]);
	const [lastPlayed, setLastPlayed] = useState<SpotifyTrack>();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [nowPlayingData, topTracksData] = await Promise.all([
                    getNowPlaying(),
                    getTopTracks(),
                ]);

                setNowPlaying(nowPlayingData.isPlaying ? nowPlayingData : null);
                setTopTracks(topTracksData);

                if (!nowPlayingData.isPlaying) {
                    const lastPlayedData = await getLastPlayed();
                    setLastPlayed(lastPlayedData);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchInitialData();

        const fetchNowPlayingPeriodically = async () => {
            try {
                const nowPlayingData = await getNowPlaying();
                setNowPlaying(nowPlayingData);
            } catch (error) {
                console.error("Failed to fetch now-playing data:", error);
            }
        };

        // Set interval for periodic fetching
        const interval = setInterval(fetchNowPlayingPeriodically, 60000);

        return () => clearInterval(interval);
    }, []);

	return (
		<div className="w-full max-w-3xl mx-auto p-6 space-y-8">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-muted" />
				</div>
				<div className="relative flex justify-center">
					<h2 className="bg-background px-6 text-3xl font-bold tracking-tight">
						Music
					</h2>
				</div>
			</div>
			<Card className="border-none bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 sm:bg-gradient-to-br sm:from-green-50 sm:to-teal-50 sm:dark:from-gray-800 sm:dark:to-gray-700">
                <CardContent className="p-4 sm:p-6">
					<div className="flex items-center gap-6">
						<Avatar className="h-24 w-24 rounded-md">
							<AvatarImage
								alt="Album art"
								src={
									nowPlaying?.albumImageUrl ||
									lastPlayed?.albumImageUrl
								}
							/>
							<AvatarFallback>AL</AvatarFallback>
						</Avatar>
						<div className="space-y-1">
							{nowPlaying ? (
								<h2 className="text-2xl font-bold">
									Currently playing
								</h2>
							) : (
								<h2 className="text-2xl font-bold">
									Last played
								</h2>
							)}
							<h3 className="text-xl">
								{nowPlaying?.title || lastPlayed?.title}
							</h3>
							<p className="text-sm text-muted-foreground">
								{nowPlaying?.artist ||
									lastPlayed?.artist ||
									"Unknown artist"}
							</p>
						</div>
					</div>
					<div className="mt-6 space-y-2">
						<Slider
							value={[
								((nowPlaying?.progress_ms || 0) /
									(nowPlaying?.duration_ms || 1)) *
									100,
							]}
							max={100}
							step={1}
							className="w-full"
							disabled
						/>
						<div className="flex justify-between text-xs text-muted-foreground">
							<span>
								{nowPlaying?.progress || lastPlayed?.progress}
							</span>
							<span>
								{nowPlaying?.duration || lastPlayed?.duration}
							</span>
						</div>
					</div>
					<div className="mt-4 flex justify-between items-center">
						<div className="flex items-center gap-2">
							<Button size="icon" variant="ghost">
								<Volume2 className="h-4 w-4" />
							</Button>
							<Slider
								defaultValue={[80]}
								max={100}
								step={1}
								className="w-20"
								disabled
							/>
						</div>
                        <div className="flex items-center gap-2 sm:gap-4">
                            <Button size="icon" variant="ghost">
                                <Shuffle className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <SkipBack className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                            <Button size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                                {nowPlaying ? (
                                    <Pause className="h-4 w-4 sm:h-5 sm:w-5" />
                                ) : (
                                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                                )}
                            </Button>
                            <Button size="icon" variant="ghost">
                                <SkipForward className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <Repeat className="h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                        </div>
						<div className="w-[100px]" />
					</div>
				</CardContent>
			</Card>

			<div className="space-y-4">
				<h2 className="text-2xl font-bold">Top tracks</h2>
				<div className="space-y-2">
					{topTracks.map((track, index) => (
						<div
							key={index}
							className="group flex items-center gap-4 rounded-lg p-2 hover:bg-muted/50 transition-colors">
							<span className="w-8 text-center text-sm text-muted-foreground">
								{index + 1}
							</span>
							<Avatar className="h-12 w-12 rounded-md">
								<AvatarImage
									alt={`${track.title} album art`}
									src={track.albumImageUrl}
								/>
								<AvatarFallback>AL</AvatarFallback>
							</Avatar>
							<div className="flex-1 space-y-1 min-w-0">
								<p className="text-sm font-medium leading-none truncate">
									{track.title}
								</p>
								<p className="text-sm text-muted-foreground truncate">
									{track.artist}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
