import { NextRequest, NextResponse } from 'next/server';
import { search_spotify } from '../../../spotify_utils/api_endpoints'

export async function POST(req: NextRequest) {
	const body = await req.json()
	try {
		const success = await search_spotify()
		if (!success) {
			throw new Error("Failed to add track to playlist")
		}
		return NextResponse.json({ status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
