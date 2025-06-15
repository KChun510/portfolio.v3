import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import { filtered_top_data } from '@/app/spotify_utils/types';

type TopItemProps = filtered_top_data & {
	className?: string,
}

function TopItem({ className = '', name, external_urls, album, artists }: TopItemProps) {
	return (
		// Outer border with full width
		<div className={`w-full border-b border-black ${className}`}>
			{/* Padded inner content */}
			<div className="flex items-center gap-4 py-2">
				{/* Album Cover */}
				<div className="w-[100px] shrink-0">
					<Image className="rounded" src={album.images[1].url} height={100} width={100} alt="album logo" />
				</div>

				{/* Song Info */}
				<div className="w-full">
					<a href={external_urls.spotify} target="_blank" rel="noopener noreferrer">
						<b><h1 className="text-xl">{name}</h1></b>
					</a>
					{artists.map(({ external_urls, name }) => (
						<a href={external_urls.spotify} target='_blank' key={name}>
							<h5>{name}</h5>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default TopItem
