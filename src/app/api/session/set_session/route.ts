import { NextRequest, NextResponse } from "next/server";
import { createSession } from '@/../db_actions/sessions'
import { import_session_data } from '@/../db_actions/types'
import { serialize } from "cookie";
import crypto from "crypto";
const isDev = process.env.NODE_ENV === 'development';

export async function POST(req: NextRequest) {
	const body: import_session_data = await req.json()
	const { user_tag, song_names } = body
	const session_id = crypto.randomBytes(32).toString("hex")
	const song_count = 0

	if (true) {
		createSession(session_id, user_tag, song_names);
		const response = NextResponse.json({ valid: true, message: "Cookie Set Success" });
		response.headers.set(
			"Set-Cookie",
			serialize("session", session_id, {
				httpOnly: true,
				secure: !isDev,
				sameSite: "lax",
				path: "/",
				maxAge: 60 * 60 * 24 * 365 * 10,
			})
		)
		response.headers.append(
			"Set-Cookie",
			serialize("song_count", song_count.toString(), {
				httpOnly: true,
				secure: !isDev,
				sameSite: "lax",
				path: "/",
				maxAge: 60 * 60 * 24 * 365 * 10,
			})
		)
		return response
	} else {
		return NextResponse.json({ "valid": false, message: "Login failed" })
	}
}
