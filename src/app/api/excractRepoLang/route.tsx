import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from "octokit";

const octokit = new Octokit({
	auth: process.env.GH_Token
});

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const repoName = body.repoName;
		if (!repoName) {
			return NextResponse.json({ error: 'Missing repoName parameter' }, { status: 400 });
		}

		const res = await octokit.request('GET /repos/{owner}/{repo}/languages', {
			owner: 'KChun510',
			repo: repoName,
			headers: {
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});
		return NextResponse.json(Object.keys(res['data']));
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
