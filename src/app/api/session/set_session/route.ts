import { NextRequest, NextResponse } from "next/server";
import { createSession } from '@/../db_actions/sessions'
import { import_session_data } from '@/../db_actions/types'
import { serialize } from "cookie";
import crypto from "crypto";

export async function POST(req: NextRequest) {
	const body: import_session_data = await req.json()
	const { user_tag, song_names } = body
	const session_id = crypto.randomBytes(32).toString("hex");

	if (true) {
		createSession(session_id, user_tag, song_names);
		const response = NextResponse.json({ valid: true, message: "Cookie Set Success" });
		response.headers.set(
			"Set-Cookie",
			serialize("session", session_id, {
				httpOnly: true,
				secure: true,              // ✅ must be true for "none"
				sameSite: "lax",          // ✅ enables cross-origin cookie sharing
				path: "/",
				maxAge: 3600,
			})
		);
		return response
	} else {
		return NextResponse.json({ "valid": false, message: "Login failed" })
	}
}
