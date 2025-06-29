import { NextRequest, NextResponse } from "next/server";
import { analyze_userTag } from "@/app/openai_utils/openAI_api";

export async function POST(req: NextRequest) {
	if (req) {
		const user_tag: string = await req.json()
		if (!user_tag) {
			return NextResponse.json({ message: "Error getting user tag" }, {
				status: 202,
			});
		}
		for (let i = 0; i < 2; ++i) {
			const res = await analyze_userTag(user_tag)
			if (res === "true" || res === "false") {
				return NextResponse.json({ data: res === "true" ? true : false }, {
					status: 200,
				});
			}
			if (i === 1) {
				return NextResponse.json({ data: undefined }, {
					status: 200,
				});

			}
		}
	}
	return NextResponse.json({ message: "Error getting req body" }, {
		status: 500,
	});
}



