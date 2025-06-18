import { useQuery } from "react-query";
import { search_items } from "@/app/actions";
import { topTracks } from "@/app/spotify_utils/types";
import SearchBar from "../searchBar";
import SearchItem from "../searchItem";
import '../../music_cont.css'

type ModalProps = {
	value: string;
	onChange: (value: string) => void;
	onClick?: () => void;
	className?: string;
};

const Modal = ({ className, value, onChange, onClick }: ModalProps) => {
	const { data, isLoading } = useQuery<topTracks[]>({
		queryKey: ['searchItems'],
		queryFn: async () => search_items()
	});

	return (
		<div className="fixed h-[100dvh] inset-0 bg-black/50 flex items-center justify-center z-11" onClick={onClick}>
			<div className="flex flex-col w-full max-w-lg space-y-2" onClick={(e) => e.stopPropagation()}>
				<SearchBar className="" value={value} onChange={onChange} />

				<div className="flex max-h-[60vh]">
					<div className="modal_songList flex-col overflow-y-auto bg-[#374151] text-white-400 rounded-xl shadow-lg p-6">
						{!isLoading && data ? data.map(({ name, album, artists, uri }) =>
							<SearchItem key={uri} name={name} album={album} artists={artists} uri={uri} />)
							:
							<h1> No Recent Searches </h1>
						}
					</div>

				</div>
			</div>
		</div>
	)
}
export default Modal
