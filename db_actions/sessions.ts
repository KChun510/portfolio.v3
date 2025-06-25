import { openDB } from "./connection";
export function createSession(session_id: string, user_tag: string, song_names: string[]) {
	const db = openDB()
	const song_string = JSON.stringify(song_names)
	db.prepare(
		"INSERT INTO sessions (session_id, user_tag, song_names, created_at) VALUES (?, ?, ?,datetime('now'))"
	).run(session_id, user_tag, song_string)
}

export function select_all_sessions() {
	const db = openDB()
	const data: any = db.prepare("SELECT session_id, user_tag, song_names FROM sessions").all()
	const formatted_data = data.map(({ session_id, user_tag, song_names }: any) => ({
		session: session_id,
		user_tag,
		song_names: JSON.parse(song_names)
	}));

	return formatted_data
}

export function updateSession(session_id: string, user_tag: string, song_names: string[]) {
	const db = openDB();
	const song_string = JSON.stringify(song_names)

	return db.prepare(
		"UPDATE sessions SET user_tag = ?, song_names = ? WHERE session_id = ?"
	).run(user_tag, song_string, session_id)
}

export function getSession(sessionId: string) {
	const db = openDB()
	return db.prepare("SELECT * FROM sessions WHERE session_id = ?").get(sessionId)
}

export function deleteSession(sessionId: string) {
	const db = openDB()
	db.prepare("DELETE FROM sessions WHERE session_id = ?").run(sessionId)
}

/*
(function main() {
	console.log(select_all_sessions())
})()
*/

