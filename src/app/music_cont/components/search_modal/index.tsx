import { useQuery } from "react-query";
import { search_items } from "@/app/actions";
import { CurrSongProps, songPickModalProps, topTracks } from "@/app/spotify_utils/types";
import AddForm from "./components/add_form";
import SearchBar from "../searchBar";
import SearchItem from "../searchItem";
import '../../music_cont.css'
import { useState } from "react";

type ModalProps = {
	value: string;
	onChange: (value: string) => void;
	onClick?: () => void;
	className?: string;
};

const Modal = ({ className, value, onChange, onClick }: ModalProps) => {
	const [formState, setFormState] = useState(false)
	const [formData, setFormData] = useState<songPickModalProps>({ song_artists: null, song_cover_art: null, song_name: null })

	const { data, isLoading } = useQuery<topTracks[]>({
		queryKey: ['searchItems'],
		queryFn: async () => search_items()
	});

	return (
		<div className="fixed h-[100dvh] inset-0 bg-black/50 flex items-center justify-center z-11" onClick={onClick}>
			<div className="flex flex-col w-full max-w-lg space-y-2" onClick={(e) => e.stopPropagation()}>
				<SearchBar className="" value={value} onChange={onChange} />
				<div className="modal_songList flex-col overflow-y-auto bg-[#374151] text-white-400 rounded-xl shadow-lg p-6 w-full">
					<div className="flex max-h-[60vh]">
						{formState ? <AddForm song_artists={formData.song_artists} song_cover_art={formData.song_cover_art} song_name={formData.song_name} />
							: <div>
								{!isLoading && data ? data.map(({ name, album, artists, uri }) =>
									<SearchItem className="search_song_button" key={uri} name={name} album={album} artists={artists} uri={uri} onClick={() => {
										setFormData({ song_artists: artists, song_cover_art: album.images, song_name: name })
										setFormState(true)
									}} />)
									:
									<div className="flex items-center justify-center">
										<h1> No Recent Searches </h1>
									</div>
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
