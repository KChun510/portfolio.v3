export type import_session_data = {
	user_tag: string,
	song_names: string[]
}

export type export_session_data = import_session_data & {
	session_id: string
}
