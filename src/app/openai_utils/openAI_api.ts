import { OpenAI } from "openai"
import path from 'path';
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export async function analyze_userTag(user_tag: string) {
	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

	const meta_data = await openai.chat.completions.create({
		messages: [{ role: "system", content: "You are tasked with analyzing a user tag for my website, that is user-created. Determine if it's professional/ acceptable if a recruiter were to see the user tag. Nicknames and playful tags are allowed. Your output will be 'true': if acceptable or 'false': if denied" },
		{ role: "user", content: `Here is the user tag analyze: ${user_tag}` }],
		model: "gpt-4o-mini",
	});
	const metaContent = meta_data.choices[0].message.content
	return metaContent
}



