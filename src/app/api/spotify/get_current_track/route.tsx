import { NextResponse } from 'next/server';
import { get_current_track } from '../../../spotify_utils/api_endpoints'

export async function GET() {
	try {
		const data = await get_current_track()
		if (!data) {
			console.log("Failed to get current track")
		}
		return NextResponse.json(data, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}


