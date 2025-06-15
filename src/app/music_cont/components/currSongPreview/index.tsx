import { CurrentSongData } from "@/app/spotify_utils/types"
import Image from "next/image"

type CurrSongProps = CurrentSongData & {
	className?: string
}

const CurrSongPreview = ({ className = '', is_playing, progress_ms, song_artists, song_cover_art, song_duration, song_name, song_direct_link
}: CurrSongProps) => {
	return (
		<div className={`flex items-start gap-4 ${className}`}>
			<div className="w-[100px] shrink-0">
				<Image className="rounded" src={song_cover_art ? song_cover_art[1].url : ""} height={100} width={100} alt="album logo" />
			</div>
			<div className="w-64">
				<a href={song_direct_link ?? undefined} target="_blank" rel="noopener noreferrer">
					<b><h1 className="text-xl">{song_name}</h1></b>
				</a>
				{song_artists ? song_artists.map(({ external_urls, name }) => <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a>) : <h5>No Current Artist</h5>}
			</div>
		</div>
	)
}
export default CurrSongPreview
