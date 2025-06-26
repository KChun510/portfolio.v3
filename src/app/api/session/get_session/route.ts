import { NextRequest, NextResponse } from "next/server";
import { parse } from "cookie";
import { getSession } from "@/../db_actions/sessions"
import { export_session_data } from "@/../db_actions/types"

export async function GET(req: NextRequest) {
	try {
		const cookies = parse(req.headers.get("cookie") || "");
		const browserSessionId = cookies.session

		if (!browserSessionId) {
			return NextResponse.json({ hasCookie: false }, {
				status: 200,
			});
		}

		const { session_id, user_tag, song_names } = await getSession(browserSessionId ? browserSessionId : "") as export_session_data

		const session = browserSessionId ? session_id : null;

		if (!session) { throw new Error("Browser session not found in DB") }

		return NextResponse.json({ hasCookie: true, session, user_tag, song_names }, {
			status: 200,
		});

	} catch (err) {
		return NextResponse.json({ hasCookie: false }, {
			status: 202,
			statusText: err as string
		});
	}
}
/* Note: Pattern looks a bit weired. But ensures a user doesn't just place a cookie in their browser */
