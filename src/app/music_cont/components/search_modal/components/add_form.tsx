import SearchItem from "../../searchItem"
import CurrSongPick_modal from "../../currSongPick_modal"
import { songPickModalProps } from "@/app/spotify_utils/types"
import { User } from "lucide-react"

const AddForm = ({ song_artists, song_cover_art, song_name }: songPickModalProps) => {
	return (
		<div className="flex flex-col space-y-4 w-full">
			<h1 className="text-2xl"><b>Song Selected:</b></h1>
			{/* This will be a view of the song pick */}
			<CurrSongPick_modal song_name={song_name} song_artists={song_artists} song_cover_art={song_cover_art} />
			{/* User Icon here followed by a text entry box (Optional) */}
			<h1 className="text-2xl"><b>Added by:</b></h1>
			<input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Put a Name to the Suggestion (Optional)" />
			<div className="flex flex-row justify-between">
				{/* Back button here */}
				<button className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base"> Back </button>
				{/* Submit button here */}
				<button className="w-24 bg-[#302c2c] hover:bg-[#4a4545] text-white font-bold py-2 px-4 rounded text-sm md:text-base"> Submit </button>

			</div>
		</div>
	)
}
export default AddForm
