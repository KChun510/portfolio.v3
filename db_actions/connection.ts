import Database from "better-sqlite3";
import path from "path";

export function openDB() {
	//	const dbPath = path.join(process.cwd(), "user_info.db");
	const dbPath = path.join(process.cwd(), "db_actions", "user_info.db");
	return new Database(dbPath, { verbose: () => { } });
}

