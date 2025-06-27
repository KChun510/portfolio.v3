import { CurrentSongData } from "@/app/spotify_utils/types"
import { Pause } from 'lucide-react';
import blank_album_cover from "../assets/blank_album_cover.png"
import sound_wave from "../assets/sound_wave.json"
import Player from "lottie-react";
import Image from "next/image"
import Progress_Bar from "../progress_bar";

type CurrSongProps = CurrentSongData & {
	className?: string,
	refetchFn: () => void
}

const CurrSongPreview = ({ className = '', is_playing, progress_ms, song_artists, song_cover_art, song_duration, song_name, song_direct_link, refetchFn
}: CurrSongProps) => {
	return (
		<div className={`flex flex-row justify-center items-center gap-4 ${className}`}>

			<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
				<Image
					className="rounded"
					src={song_cover_art ? song_cover_art[1].url : blank_album_cover}
					fill
					sizes="(min-width: 768px) 100px, 50px"
					alt="album logo"
				/>
			</div>
			<div className="w-[50vw]">

				{/* Song Name with line-clamp-1 */}
				<a href={song_direct_link ?? undefined} target="_blank" rel="noopener noreferrer">
					<h1 className="text-xl font-bold line-clamp-1">
						{song_name ?? "Not listening to music"}
					</h1>
				</a>

				{/* Artist Names with line-clamp-1 */}
				<div className="flex flex-row text-gray-400">
					<h5 className="line-clamp-1">
						{song_artists
							? song_artists.map(({ name }, index) =>
								index === song_artists.length - 1 ? name : `${name}, `
							).join('')
							: "No Artist"}
					</h5>
				</div>

			</div>

			<div className="relative flex flex-col overflow-visible justify-center">
				{is_playing ?
					<div className="w-[50px] h-[50px] md:w-[100px] md:h-[80px]">
						<Player
							animationData={sound_wave}
							loop
							className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-7/10 md:-translate-y-6/10 w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
						/>
					</div>
					:
					<div className="flex flex-col w-full h-[50px] h-[50px] md:h-[80px] justify-center items-center">
						<Pause color="#8746ff" fill="#8746ff" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" />
						<h5 className="text-gray-400 py-1 md:py-2 text-sm md:text-md"> Paused </h5>
					</div>
				}
				<Progress_Bar duration={song_duration ?? 0} progress_ms={progress_ms ?? 0} className="w-25 md:w-50" isPlaying={is_playing ?? false} refetchFn={refetchFn} />
			</div>
		</div >
	)
}
export default CurrSongPreview
