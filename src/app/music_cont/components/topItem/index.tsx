import React from 'react';
import Image from 'next/image';
import { filtered_top_data } from '@/app/spotify_utils/types';

type TopItemProps = filtered_top_data & {
	className?: string,
}

function TopItem({ className = '', name, external_urls, album, artists }: TopItemProps) {
	return (
		// Outer border with full width
		<div className={`w-full ${className}`}>
			{/* Padded inner content */}
			<div className="flex items-center gap-4 py-2">
				{/* Album Cover */}
				<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
					<Image className="rounded" src={album.images[1].url} fill alt="album logo" />
				</div>
				{/* Song Info */}
				<div className="w-full">
					<a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
						<b><h1 className="text-xl">{name}</h1></b>
					</a>
					<div className="flex flex-row flex-wrap space-x-1">
						{artists ? artists.map(({ external_urls, name }, index) => (index === (artists.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopItem
