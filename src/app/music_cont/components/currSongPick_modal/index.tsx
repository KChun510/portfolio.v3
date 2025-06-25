import { songPickModalProps } from "@/app/spotify_utils/types"
import blank_album_cover from "../blank_album_cover.png"
import Image from "next/image"

const CurrSongPick_modal = ({ className = '', song_artists, song_cover_art, song_name }: songPickModalProps) => {
	return (
		<div className={`flex flex-row items-start gap-4 ${className}`}>
			<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
				<Image
					className="rounded"
					src={song_cover_art ? song_cover_art[1].url : blank_album_cover}
					fill
					alt="album logo"
					sizes="(min-width: 768px) 100px, 50px"
				/>
			</div>
			<div className="w-full">
				<a target="_blank" rel="noopener noreferrer">
					<b><h1 className="text-xl">{song_name ?? "Not listing to music"}</h1></b>
				</a>
				<div className="flex flex-row flex-wrap space-x-1">
					{song_artists ? song_artists.map(({ external_urls, name }, index) => (index === (song_artists.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
				</div>
			</div>
		</div>
	)
}
export default CurrSongPick_modal
