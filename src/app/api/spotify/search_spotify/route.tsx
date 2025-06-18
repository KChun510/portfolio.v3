import { NextRequest, NextResponse } from 'next/server';
import { search_spotify } from '../../../spotify_utils/api_endpoints'

export async function POST(req: NextRequest) {
	const body = await req.json()
	try {
		const data = await search_spotify()
		if (!data) {
			throw new Error("Failed to add track to playlist")
		}
		return NextResponse.json(data, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
