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
			<div className="w-[100px] shrink-0">
				<Image src={album_cover[1].url} height={100} width={100} alt="album logo" />
			</div>

			{/* Song Info */}
			<div className="w-64">
				<a href={song_url} target="_blank" rel="noopener noreferrer">
					<b><h1 className="text-xl">{song_name}</h1></b>
				</a>
				{artists_data.map(({ external_urls, name }) => <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a>)}
			</div>

			{/* User Info */}
			<div className="w-64">
				<div className="flex items-center">
					<User height={80} width={80} strokeWidth={.8} />
					<h5>Added By: Un-named</h5>
				</div>
			</div>
		</div>
	)
}

export default SongButton
