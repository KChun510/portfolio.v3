import { CurrentSongData } from "@/app/spotify_utils/types"
import blank_album_cover from "../assets/blank_album_cover.png"
import sound_wave from "../assets/sound_wave.json"
import Player from "lottie-react";
import Image from "next/image"

type CurrSongProps = CurrentSongData & {
	className?: string
}

const CurrSongPreview = ({ className = '', is_playing, progress_ms, song_artists, song_cover_art, song_duration, song_name, song_direct_link
}: CurrSongProps) => {
	return (
		<div className={`flex flex-row items-start gap-4 ${className}`}>
			<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
				<Image
					className="rounded"
					src={song_cover_art ? song_cover_art[1].url : blank_album_cover}
					fill
					sizes="(min-width: 768px) 100px, 50px"
					alt="album logo"
				/>
			</div>
			<div className="w-full">
				<a href={song_direct_link ?? undefined} target="_blank" rel="noopener noreferrer">
					<b><h1 className="text-xl">{song_name ?? "Not listing to music"}</h1></b>
				</a>
				<div className="flex flex-row flex-wrap space-x-1 text-gray-400">
					{song_artists ? song_artists.map(({ external_urls, name }, index) => (index === (song_artists.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
				</div>
			</div>
			<div className="relative flex flex-col overflow-visible w-full">
				<div className="absolute -left-50 -top-8">
					<Player
						animationData={sound_wave}
						loop
						style={{ width: 150, height: 150 }}
					/>
				</div>
				<div
					className="relative w-full h-2 bg-neutral-700 rounded overflow-hidden"
					style={{ "--duration": "5s" } as React.CSSProperties}
				>
					<div className="absolute left-0 top-0 h-full bg-green-500 animate-progress" />
				</div>


			</div>
		</div>
	)
}
export default CurrSongPreview
