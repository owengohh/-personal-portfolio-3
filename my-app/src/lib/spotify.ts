import querystring from "querystring";
import axios from "axios";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?limit=10`;
const GET_LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export type SpotifyTrack = {
	album: string;
	albumImageUrl: string;
	artist: string;
	isPlaying: boolean;
	songUrl: string;
	title: string;
	duration: string;
	progress: string;
	duration_ms: number;
	progress_ms: number;
};

const formatMs = (ms: number) => {
	const minutes = Math.floor(ms / 60000);
	const seconds = ((ms % 60000) / 1000).toFixed(0);
	return `${minutes}:${parseInt(seconds) < 10 ? "0" : ""}${seconds}`;
};

const getAccessToken = async () => {
	const response = await axios.post(
		TOKEN_ENDPOINT,
		querystring.stringify({
			grant_type: "refresh_token",
			refresh_token,
		}),
		{
			headers: {
				Authorization: `Basic ${basic}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);

	return response.data;
};

export const getNowPlaying = async (): Promise<SpotifyTrack> => {
	const { access_token } = await getAccessToken();

	// Fetch the currently playing track
	const response = await axios.get(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

    // if status is 204, return an empty object
    if (response.status === 204 || response.status > 400) {
        return {
            album: "",
            albumImageUrl: "",
            artist: "",
            isPlaying: false,
            songUrl: "",
            title: "",
            duration: "",
            progress: "",
            duration_ms: 0,
            progress_ms: 0,
        };
    }
	// Extract the necessary information from the response data
	const song = response.data;
	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists
		.map((_artist: any) => _artist.name)
		.join(", ");
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;
	const duration = formatMs(song.item.duration_ms);
	const progress = formatMs(song.progress_ms);
	const duration_ms = song.item.duration_ms;
	const progress_ms = song.progress_ms;

	// if the song is not playing, return an empty object
	if (!isPlaying) {
		return {
			album: "",
			albumImageUrl: "",
			artist: "",
			isPlaying: false,
			songUrl: "",
			title: "",
			duration: "",
			progress: "",
			duration_ms: 0,
			progress_ms: 0,
		};
	}

	// Return the processed track information
	return {
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
		duration,
		progress,
		duration_ms,
		progress_ms,
	};
};

export const getTopTracks = async (): Promise<SpotifyTrack[]> => {
	const { access_token } = await getAccessToken();

	// Fetch the top tracks
	const response = await axios.get(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	console.log(response);

	// Extract items from the response data
	const { items } = response.data;

	// Process the items to extract the desired information
	const tracks: SpotifyTrack[] = items.map((track: any) => ({
		artist: track.artists.map((_artist: any) => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		title: track.name,
		album: track.album.name,
		albumImageUrl: track.album.images[0].url,
		isPlaying: false, // Assuming top tracks are not currently playing
		duration: formatMs(track.duration_ms),
		progress: "0:00",
		duration_ms: track.duration_ms,
		progress_ms: 0,
	}));

	// Return the processed tracks
	return tracks;
};

export const getLastPlayed = async (): Promise<SpotifyTrack> => {
	const { access_token } = await getAccessToken();
	console.log(access_token);
	// Fetch the recently played tracks
	const response = await axios.get(GET_LAST_PLAYED_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	// Extract items from the response data
	const item = response.data.items[0];

	const track: SpotifyTrack = {
		artist: item.track.artists
			.map((_artist: any) => _artist.name)
			.join(", "),
		songUrl: item.track.external_urls.spotify,
		title: item.track.name,
		album: item.track.album.name,
		albumImageUrl: item.track.album.images[0].url,
		isPlaying: false, // Assuming top tracks are not currently playing
		duration: formatMs(item.track.duration_ms),
		progress: "0:00",
		duration_ms: item.track.duration_ms,
		progress_ms: 0,
	};

	// Return the processed tracks
	return track;
};
