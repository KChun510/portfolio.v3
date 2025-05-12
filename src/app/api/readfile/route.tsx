import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	try {
		// Resolve the file path relative to the project root
		const filePath = path.join(process.cwd(), 'src', 'app', 'caching', 'gitQueryLog.json');

		// Read the file contents
		const fileContents = fs.readFileSync(filePath, 'utf8');

		// Parse the JSON data
		const jsonData = JSON.parse(fileContents);

		// Return the JSON data as a response
		return NextResponse.json(jsonData, { status: 200 });
	} catch (error) {
		// Handle errors (e.g., file not found or JSON parsing error)
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
