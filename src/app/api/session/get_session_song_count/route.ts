import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";

export async function GET(req: NextRequest) {
	try {
		const cookies = parse(req.headers.get("cookie") || "");
		const song_count = cookies.song_count;

		if (!song_count) {
			return NextResponse.json({ hasCookie: false }, {
				status: 200,
			});
		}

		return NextResponse.json({ hasCookie: true, song_count }, {
			status: 200,
		});

	} catch (err) {
		return NextResponse.json({ hasCookie: false }, {
			status: 401,
			statusText: err as string
		});
	}
}
