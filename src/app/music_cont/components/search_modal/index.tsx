import { useQuery } from "react-query";
import { search_items } from "@/app/actions";
import { CurrSongProps, filteredPlaylistData, songPickModalProps, topTracks } from "@/app/spotify_utils/types";
import AddForm from "./components/add_form";
import SearchBar from "../searchBar";
import SearchItem from "../searchItem";
import '../../music_cont.css'
import { useEffect, useState } from "react";

type ModalProps = {
	value: string;
	songData?: filteredPlaylistData[];
	onChange: (value: string) => void;
	onClick?: () => void;
	className?: string;
	refetchFn1: () => void;
	refetchFn2: () => void;
	refetchFn3: () => void;
};

const Modal = ({ className, value, onChange, onClick, songData, refetchFn1, refetchFn2, refetchFn3 }: ModalProps) => {
	const [formState, setFormState] = useState(false)
	const [formData, setFormData] = useState<songPickModalProps>({ song_artists: null, song_cover_art: null, song_name: null, uri: "" })

	const [input, setInput] = useState(value)
	const [debounceVal, setDebounceVal] = useState(input)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceVal(input)
		}, 250)

		return () => clearTimeout(handler)
	}, [input, value])

	const { data, isLoading } = useQuery<topTracks[]>({
		queryKey: ['searchItems', debounceVal],
		queryFn: async () => search_items(debounceVal),
		enabled: !!debounceVal
	})

	return (
		<div className="fixed h-[100dvh] inset-0 bg-black/50 flex items-center justify-center z-11" onClick={onClick}>
			<div className="flex flex-col w-full max-w-lg space-y-2" onClick={(e) => e.stopPropagation()}>
				<SearchBar className="" value={value} onChange1={onChange} onChange2={setInput} placeholderText="Search for a song" />
				<div className="modal_songList flex-col overflow-y-auto bg-[#374151] text-white-400 rounded-xl shadow-lg p-6 w-full">
					<div className="flex max-h-[60vh] w-full justify-center">
						{formState ?
							<AddForm song_artists={formData.song_artists} song_cover_art={formData.song_cover_art} song_name={formData.song_name} songData={songData} uri={formData.uri} backFnOnClick={() => setFormState(false)} closeModalFn={onClick} refetch1={refetchFn1} refetch2={refetchFn2} refetch3={refetchFn3} />
							:
							<div>
								{!isLoading && data ? data.map(({ name, album, artists, uri }) =>
									<SearchItem className="search_song_button" key={uri} name={name} album={album} artists={artists} uri={uri} onClick={() => {
										setFormData({ song_artists: artists, song_cover_art: album.images, song_name: name, uri: uri })
										setFormState(true)
									}} />)
									:
									<h1>No Recent Searches</h1>
								}
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Modal
