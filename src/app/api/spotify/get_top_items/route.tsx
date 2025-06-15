import { NextResponse } from 'next/server';
import { get_top_items } from '../../../spotify_utils/api_endpoints'

export async function GET() {
	try {
		const data = await get_top_items()
		if (!data) {
			throw new Error("Failed to get current track")
		}
		return NextResponse.json(data, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}


