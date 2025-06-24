import { NextResponse } from "next/server";
import { select_all_sessions } from "../../../../../db_actions/sessions";

export async function GET() {
	try {
		const data = select_all_sessions()
		return NextResponse.json(data, { status: 200 })
	} catch (err) {
		return NextResponse.json({ status: 500, statusText: err })
	}
}
