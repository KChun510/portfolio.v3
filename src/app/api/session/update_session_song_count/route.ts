import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
const isDev = process.env.NODE_ENV === 'development';

export async function POST(req: NextRequest) {
	const body: { count: number } = await req.json()
	try {
		if (!body) {
			return NextResponse.json({ message: "Error getting req body" }, {
				status: 500,
			});
		}
		const response = NextResponse.json({ valid: true, message: "Cookie Set Success" });
		response.headers.append(
			"Set-Cookie",
			serialize("song_count", body.count.toString(), {
				httpOnly: true,
				secure: !isDev,
				sameSite: "lax",
				path: "/",
				maxAge: 60 * 60 * 24 * 365 * 10,
			})
		)

		return response
	} catch (err) {
		return NextResponse.json({ message: err }, {
			status: 500,
		});
	}
}



