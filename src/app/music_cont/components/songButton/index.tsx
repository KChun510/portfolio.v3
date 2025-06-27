import React from 'react';
import Image from 'next/image';
import { filteredPlaylistData } from '@/app/spotify_utils/types';
import { remove_track_playlist, get_session_db, update_session } from '@/app/actions';

type SongButtonProps = filteredPlaylistData & {
	sessionID: string | null,
	user_tag: string | null,
	modify_avail?: boolean
	className?: string,
	refetch: () => void
}

async function handleDelete(uri: string, refetchFn: () => void, sessionID: string | null, song_name: string) {
	if (sessionID) {
		await remove_track_playlist(uri)
		refetchFn()
		const { user_tag, song_names } = await get_session_db(sessionID)
		const song_names_arr = JSON.parse(song_names)
		update_session(sessionID, user_tag, await song_names_arr.filter((name: string) => name != song_name))
	}
}

function SongButton({ className = '', song_name, song_url, album_cover, artists_data, user_tag, modify_avail, uri, refetch, sessionID }: SongButtonProps) {

	return (
		<div key={song_name} className={`flex flex-row items-center gap-4 ${className}`}>
			<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
				<Image
					src={album_cover[1].url}
					alt="album logo"
					sizes="(min-width: 768px) 100px, 50px"
					fill
					className="object-cover rounded"
				/>
			</div>

			<div className="w-64 flex flex-col"> <a href={song_url} target="_blank" rel="noopener noreferrer"> <b><h1 className="md:text-xl">{song_name}</h1></b>
			</a>
				<div className="text-gray-400">
					<div className="flex flex-row flex-wrap space-x-1">
						{artists_data ? artists_data.map(({ external_urls, name }, index) => (index === (artists_data.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
					</div>
					<div className="">
						<div className="flex items-center">
							<h5 className="text-sm md:text-base">Added By: {user_tag ?? " Un-named"} {modify_avail ? "( You )" : null}</h5>
						</div>
					</div>
				</div>
			</div >

			{
				modify_avail ?
					<div className="ml-auto md:w-64">
						<button onClick={() => handleDelete(uri, refetch, sessionID, song_name)} className="md:w-50 bg-transparent text-[#8746ff] font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:bg-transparent rounded">
							Delete </button>
					</div > : null
			}
		</div >
	)
}
export default SongButton
