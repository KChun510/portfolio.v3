import { NextResponse } from 'next/server';
import { get_playlist } from '../../../spotify_utils/api_endpoints'

export async function GET() {
	try {
		const data = await get_playlist()
		if (!data) {
			throw new Error("Failed to get playlist details")
		}
		return NextResponse.json(data, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
