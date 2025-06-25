import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "../../../../../db_actions/sessions";
import { export_session_data } from "../../../../../db_actions/types";

export async function POST(req: NextRequest) {
	const body: export_session_data = await req.json()
	try {
		if (!body) {
			return NextResponse.json({ message: "Error getting req body" }, {
				status: 500,
			});
		}
		const { session_id, user_tag, song_names } = body
		updateSession(session_id, user_tag, song_names)
		return NextResponse.json({
			status: 200,
		});
	} catch (err) {
		console.error(err)
	}
}



