import { get_local_token, write_token_data } from './json_actions'
import path from 'path';
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

async function refresh_token() {
	const client_id = process.env.SPOTIFY_CLIENT_ID!;
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;

	const token_data = await get_local_token();

	try {
		if (!token_data) {
			throw new Error('Unable to read token data from file');
		}
		const refresh_token = token_data.refresh_token;

		const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token
			}).toString()
		});

		const data = await tokenRes.json();

		if (tokenRes.ok && data.access_token) {
			token_data.access_token = data.access_token;
			console.log('Refresh success')
			write_token_data(token_data);
		} else {
			console.error('Refresh failed:', data);
		}
	} catch (err) {
		console.error('Error refreshing token:', err);
	}
}

(function main() {
	refresh_token()
})()


