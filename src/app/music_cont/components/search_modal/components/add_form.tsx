import CurrSongPick_modal from "../../currSongPick_modal"
import { useState } from "react"
import { add_track, set_session, get_session_browser, get_session_db, update_session } from "@/app/actions"
import { songPickModalProps } from "@/app/spotify_utils/types"
import { useQuery } from "react-query"

const AddForm = ({ song_artists, song_cover_art, song_name, uri, backFnOnClick, closeModalFn, songData, refetch1, refetch2 }: songPickModalProps) => {
	const { data: browserData, isLoading } = useQuery<any>({
		queryKey: ['browserData']
	})

	const [error, setError] = useState({ errorOn: false, errorMessage: "" })
	const [userTag, setUserTag] = useState(browserData.user_tag ?? "")



	const handle_form_submit = async () => {
		for (const track of songData!) {
			if (track.song_name == song_name) {
				setError({ errorOn: true, errorMessage: `Song of: "${song_name}" already on playlist. ` })
				return
			}
		}
		if (browserData && browserData.hasCookie) {
			set_session(userTag === "" ? null : userTag, [song_name])
		} else {
			/* Song-Update Logic */
			const dbData = await get_session_db(browserData.session)
			const song_arr: string[] = await JSON.parse(dbData.song_names)
			song_arr.push(song_name!)
			await update_session(dbData.session_id, userTag, song_arr)
		}

		const res = await add_track(uri)
		if (res && closeModalFn && refetch1 && refetch2) {
			refetch2()
			refetch1()
			closeModalFn()
			return
		}
		setError({
			errorOn: true, errorMessage: 'Error in adding to "Flavor Town" playlist try again later -or- ping me ;)'
		})
		return
	}

	return (
		<div className="flex flex-col space-y-4 w-full">
			<h1 className="text-2xl"><b>Song Selected:</b></h1>
			{/* This will be a view of the song pick */}
			<CurrSongPick_modal song_name={song_name} song_artists={song_artists} song_cover_art={song_cover_art} />
			{/* User Icon here followed by a text entry box (Optional) */}
			<h1 className="text-2xl"><b>Added by:</b></h1>
			<input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Put a Name to the Suggestion (Optional)" value={userTag} onChange={(e) => setUserTag(e.target.value)} />
			<div className="flex flex-row justify-between">
				{/* Back button here */}
				<button className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" onClick={backFnOnClick}> Back </button>
				{/* Submit button here */}
				<button onClick={() => handle_form_submit()} className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base"> Submit </button>
			</div>
			{error.errorOn ? <h5 className="text-sm text-red-500 flex flex-row justify-center">{error.errorMessage}</h5> : null}
		</div>
	)
}
export default AddForm
