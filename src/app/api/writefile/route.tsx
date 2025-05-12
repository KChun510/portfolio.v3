import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	try {
		// Resolve the file path relative to the project root
		const filePath = path.join(process.cwd(), 'src', 'app', 'caching', 'gitQueryLog.json');

		// Ensure the directory exists (if not, create it)
		const dirPath = path.dirname(filePath);
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true }); // Create directory if it doesn't exist
		}

		// Write the JSON data to the file
		fs.writeFileSync(filePath, JSON.stringify(await req.json(), null, 2));

		// Return a success response
		return NextResponse.json({ message: 'Data written successfully' }, { status: 200 });
	} catch (error) {
		// Handle errors (e.g., file write error)
		const errorMessage = error instanceof Error ? error.message : 'Unknown error';
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
