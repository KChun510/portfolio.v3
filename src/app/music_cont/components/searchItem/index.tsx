import React from 'react';
import Image from 'next/image';
import { filtered_data_basic, filtered_search_data, filtered_top_data, topTracks } from '@/app/spotify_utils/types';

type SearchItem = filtered_search_data & {
	className?: string,
}

function SearchItem({ className = '', name, album, artists, uri }: SearchItem) {
	return (
		<div className={`w-full ${className}`}>
			<div className="flex items-center gap-4 py-2">
				<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
					<Image className="rounded" src={album.images[1].url} fill alt="album logo" />
				</div>
				<div className="w-full">
					<b><h1 className="text-xl">{name}</h1></b>
					<div className="flex flex-row flex-wrap space-x-1">
						{artists ? artists.map(({ external_urls, name }, index) => (index === (artists.length - 1) ? <a href={external_urls.spotify} target='_blank' key={name}><h5>{name}</h5></a> : <a href={external_urls.spotify} target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
					</div>
				</div>
			</div>
		</div>
	);
}
export default SearchItem
