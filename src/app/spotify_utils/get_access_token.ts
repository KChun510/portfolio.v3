import { write_token_data, get_local_token } from './json_actions'
import dotenv from 'dotenv'
import express from 'express';
import { generateRandomString } from './utils'; // Ensure this path is correct
import queryString from 'query-string';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function oauth() {
	const client_id = process.env.SPOTIFY_CLIENT_ID!;
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
	const redirect_uri = process.env.REDIRECT_URI!;

	const app = express();
	let server: ReturnType<typeof app.listen>

	app.get('/login', function(req, res) {
		const state = generateRandomString(16);
		const scope = 'playlist-modify-public user-read-currently-playing user-top-read';

		const authUrl = 'https://accounts.spotify.com/authorize?' +
			queryString.stringify({
				response_type: 'code',
				client_id,
				scope,
				redirect_uri,
				state
			});

		console.log("Redirecting to:", authUrl);
		res.redirect(authUrl);
	});

	app.get('/callback', async function(req, res) {
		const code = req.query.code as string || null;
		const state = req.query.state as string || null;

		if (!state || !code) {
			return res.redirect('/#' + queryString.stringify({ error: 'state_mismatch' }));
		}

		try {
			const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
				},
				body: new URLSearchParams({
					grant_type: 'authorization_code',
					code,
					redirect_uri
				}).toString()
			});

			const data = await tokenRes.json();

			if (data.access_token) {
				write_token_data(data);
				res.send('Authorization successful! You may close this tab.');
			} else {
				console.error(data);
				res.status(400).send('Failed to exchange code');
			}
			server.close(() => {
				console.log('OAuth server closed.');
			});
		} catch (err) {
			console.error(err);
			res.status(500).send('Internal error during token exchange');
		}
	});

	server = app.listen(8888, () => {
		console.log('OAuth server running at http://127.0.0.1:8888/login');
	});
}


(async function main() {
	await oauth()
})() 
