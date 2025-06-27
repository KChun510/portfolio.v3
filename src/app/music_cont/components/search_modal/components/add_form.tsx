import { useState } from "react"
import { add_track, set_session, get_session_db, update_session, get_song_count_browser, get_session_browser } from "@/app/actions"
import { songPickModalProps } from "@/app/spotify_utils/types"
import { useQuery } from "react-query"
import CurrSongPick_modal from "../../currSongPick_modal"
import { Filter } from 'bad-words'

const AddForm = ({ song_artists, song_cover_art, song_name, uri, backFnOnClick, closeModalFn, songData, refetch1, refetch2, refetch3 }: songPickModalProps) => {
	const [disabled, setDisabled] = useState(false)
	const max_song_count = 4
	const { data: browserData } = useQuery<any>({
		queryKey: ['browserData'],
		queryFn: async () => await get_session_browser(),
		initialData: undefined
	})

	const { data: session, isLoading: isSongCountLoading } = useQuery<{ song_count: number }>({
		queryKey: ['song_count'],
		queryFn: async () => await get_song_count_browser()
	})

	const [error, setError] = useState({ errorOn: false, errorMessage: "" })
	const [userTag, setUserTag] = useState(browserData && browserData.user_tag ? browserData.user_tag : "")
	const filter = new Filter()

	const handle_form_submit = async () => {
		setDisabled(true)
		if (filter.isProfane(userTag)) {
			setError({ errorOn: true, errorMessage: `User Tag: "${userTag}" is not allowed` })
			setDisabled(false)
			return
		}

		if (userTag.length > 15) {
			setError({ errorOn: true, errorMessage: `User Tag: "${userTag}" is too long. Max Len 15` })
			setDisabled(false)
			return
		}

		for (const track of songData!) {
			if (track.song_name == song_name) {
				setError({ errorOn: true, errorMessage: `Song of: "${song_name}" already on playlist` })
				setDisabled(false)
				return
			}
		}

		const dbData = await get_session_db(browserData.session)
		if (!browserData.session || !dbData.song_names) {
			await set_session(userTag === "" ? null : userTag, [song_name])
		} else {
			/* Song-Update Logic */
			const song_arr: string[] = await JSON.parse(dbData.song_names)
			if (song_arr.length < max_song_count) {
				song_arr.push(song_name!)
				await update_session(dbData.session_id, userTag, song_arr)
			} else {
				setError({ errorOn: true, errorMessage: `You've added max of ${max_song_count} songs` })
				setDisabled(false)
				return
			}
		}

		const res = await add_track(uri)
		if (res && closeModalFn && refetch1 && refetch2 && refetch3) {
			refetch3()
			refetch2()
			refetch1()
			closeModalFn()
			setDisabled(false)
			return
		}
		setError({
			errorOn: true, errorMessage: 'Error in adding to "Flavor Town" playlist try again later -or- ping me ;)'
		})
		setDisabled(false)
		return
	}

	const handle_enter_press = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handle_form_submit()
		}
	}

	return (
		<div className="flex flex-col space-y-4 w-full">
			<h1 className="text-2xl"><b>Song Selected:</b></h1>
			{/* This will be a view of the song pick */}
			<CurrSongPick_modal song_name={song_name} song_artists={song_artists} song_cover_art={song_cover_art} />
			{/* User Icon here followed by a text entry box (Optional) */}
			<h1 className="text-2xl"><b>Added by:</b></h1>
			<input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Put a Name to the Suggestion (Optional)" value={userTag} onKeyDown={(e) => handle_enter_press(e)} onChange={(e) => setUserTag(e.target.value)} />
			<div className="flex flex-row justify-between">
				{/* Back button here */}
				<button className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" onClick={backFnOnClick}> Back </button>
				{/* Submit button here */}
				<button onClick={() => handle_form_submit()} className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base" disabled={disabled}> Submit </button>
			</div>
			{error.errorOn ? <h5 className="text-sm text-red-500 flex flex-row justify-center">{error.errorMessage}</h5> : null}
		</div>
	)
}
export default AddForm
