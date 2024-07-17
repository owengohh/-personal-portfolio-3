import querystring from "querystring";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: querystring.stringify({
			grant_type: "refresh_token",
			refresh_token,
		}),
	});

	return response.json();
};

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken();

	// Fetch the currently playing track
	const response = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	// Check the response status
	if (response.status === 204 || response.status > 400) {
		return { isPlaying: false };
	}

	// Convert the response to JSON and extract the necessary information
	const song = await response.json();
	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists
		.map((_artist: any) => _artist.name)
		.join(", ");
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	// Return the processed track information
	return {
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	};
};

export const getTopTracks = async () => {
	const { access_token } = await getAccessToken();

	// Fetch the top tracks
	const response = await fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	// Convert the response to JSON and extract items
	const { items } = await response.json();

	// Process the items to extract the desired information
	const tracks = items.slice(0, 10).map((track: any) => ({
		artist: track.artists.map((_artist: any) => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		title: track.name,
    album: track.album.name,
    albumImageUrl: track.album.images[0].url,
	}));

	// Return the processed tracks
	return tracks;
};
