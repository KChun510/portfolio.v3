import path from 'path';
import { fileURLToPath } from 'url';
import { token_res } from './types';
import { promises as fs } from 'fs';

// Fix for __dirname in ESM (like tsx or native ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always resolve relative to the current file
const tokenPath = path.join(__dirname, 'token_data.json');

export async function get_local_token(): Promise<token_res | null> {
	const file_cont = await fs.readFile(tokenPath, 'utf8');
	return file_cont ? JSON.parse(file_cont) : null;
}

export async function write_token_data(file_cont: token_res) {
	await fs.writeFile(tokenPath, JSON.stringify(file_cont));
}

