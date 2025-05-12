import { NextResponse } from 'next/server';
import { Octokit } from "octokit"

const octokit = new Octokit({
	auth: process.env.GH_Token
});

export async function GET() {
	const res = await octokit.request('GET /users/{username}/repos', {
		username: 'KChun510',
		sort: 'updated',
		direction: 'desc',
		per_page: 100,
		headers: {
			'X-Github-Api-Version': '2022-11-28',
		},
	});

	return NextResponse.json(res['data']);
}
