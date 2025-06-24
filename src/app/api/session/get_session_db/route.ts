import { NextRequest, NextResponse } from "next/server";
import { getSession } from "../../../../../db_actions/sessions";

export async function POST(req: NextRequest) {
	const session_id: string = await req.json()

	if (!session_id) {
		return NextResponse.json({ message: "Error getting sessionID" }, {
			status: 500,
		});
	}
	const data = getSession(session_id)
	return NextResponse.json(data, {
		status: 200,
	});
}



