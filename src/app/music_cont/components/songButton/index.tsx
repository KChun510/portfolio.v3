import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { filteredPlaylistData } from '@/app/spotify_utils/types';

type SongButtonProps = filteredPlaylistData & {
	className?: string,
}

function SongButton({ className = '', song_name, song_url, album_cover, artists_data }: SongButtonProps) {
	return (
		<div key={song_name} className={`flex items-center gap-4 ${className}`}>
			{/* Album Cover */}
			<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
				<Image
					src={album_cover[1].url}
					alt="album logo"
					fill
					className="object-cover rounded"
				/>
			</div>

			{/* Song Info */}
			<div className="w-64">
				<a href={song_url} target="_blank" rel="noopener noreferrer">
					<b><h1 className="md:text-xl">{song_name}</h1></b>
				</a>
				<div className="flex flex-row flex-wrap space-x-1">
					{artists_data ? artists_data.map(({ external_urls, name }, index) => (index === (artists_data.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
				</div>
			</div>

			{/* User Info */}
			<div className="w-64">
				<div className="flex items-center">
					<User className="w-10 h-10 md:w-20 md:h-20 stroke-[0.8]" />
					<h5 className="text-sm md:text-base">Added By: Un-named</h5>
				</div>
			</div>
		</div>
	)
}

export default SongButton
