import { NextRequest, NextResponse } from 'next/server';
import { remove_track_from_playlist } from '../../../spotify_utils/api_endpoints'

export async function POST(req: NextRequest) {
	const body = await req.json()
	try {
		const success = await remove_track_from_playlist([{ uri: "test" }])
		if (!success) {
			throw new Error("Failed to remove track from playlist")
		}
		return NextResponse.json({ status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}


