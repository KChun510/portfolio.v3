import React from 'react';
import Image from 'next/image';
import { filtered_search_data } from '@/app/spotify_utils/types';

type SearchItem = filtered_search_data & {
	onClick?: () => void,
	className?: string,
}

function SearchItem({ className = '', name, album, artists, uri, onClick }: SearchItem) {
	return (
		<div className={`w-full ${className}`} onClick={onClick}>
			<div className="flex items-center gap-4 p-2 hover:bg-[#4B5563] rounded-lg">
				<div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px] shrink-0">
					<Image className="rounded" src={album.images[1].url} fill alt="album logo" sizes="(min-width: 768px) 100px, 50px" />
				</div>
				<div className="text-white w-full">
					<b><h1 className="text-xl">{name}</h1></b>
					<div className="flex flex-row flex-wrap space-x-1">
						{artists ? artists.map(({ external_urls, name }, index) => (index === (artists.length - 1) ? <a target='_blank' key={name}><h5>{name}</h5></a> : <a target='_blank' key={name}><h5>{name},</h5></a>)) : <h5>No Artist</h5>}
					</div>
				</div>
			</div>
		</div>
	);
}
export default SearchItem
