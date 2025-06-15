'use client'
import './music_cont.css'
import { get_currTrack, get_playlist, get_top_items } from '../actions';
import { useQuery } from 'react-query';
import { CurrentSongData, filtered_top_data, filteredPlaylistData } from '../spotify_utils/types';
import SearchBar from './components/searchBar'
import SongButton from './components/songButton';
import CurrSongPreview from './components/currSongPreview';
import TopItem from './components/topItem';

const MusicCont = ({ id }: { id: string }) => {
  const { data: playListSongs, isLoading: isLoadingPlaylist } = useQuery<filteredPlaylistData[]>({
    queryKey: ['playlistData'],
    queryFn: async () => await get_playlist()
  });

  const { data: currTrack, isLoading: isLoadingCurr } = useQuery<CurrentSongData>({
    queryKey: ['currTrackData'],
    queryFn: async () => await get_currTrack()
  });

  const { data: topItems, isLoading: isLoadingTopItems } = useQuery<filtered_top_data[]>({
    queryKey: ['topItemsData'],
    queryFn: async () => await get_top_items()
  });

  if (!isLoadingPlaylist && !isLoadingCurr && !isLoadingTopItems) {
    console.log(currTrack)
    console.log(playListSongs)
    console.log(topItems)
  }

  return (
    <div id={id}>
      <h1 className="text-6xl font-bold ml-8">Music ♫</h1>
      <div className="flex flex-col lg:flex-row items-stretch mt-1 mx-4 pb-6 rounded-lg">
        {/* Left column */}
        <div className="w-full lg:w-4/6 px-4 mb-6 flex flex-col">
          <SearchBar className="w-full mb-6" />
          <div className="songList custom_bg overflow-auto w-full border-2 border-black rounded-lg flex-1">
            <div className="list-group border-black">
              {!isLoadingPlaylist && playListSongs
                ? playListSongs.map(({ song_name, song_url, album_cover, artists_data }) => (
                  <SongButton
                    key={song_name}
                    className="border-b-[.5px] border-white py-2 px-2"
                    song_name={song_name}
                    song_url={song_url}
                    album_cover={album_cover}
                    artists_data={artists_data}
                  />
                ))
                : null}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="custom_bg w-full lg:w-2/6 px-4 mb-6 flex flex-col">
          <div className="songList flex flex-col flex-1 border-2 border-black rounded-lg">
            <div className="px-2 py-2 flex flex-col h-full">
              <h2 className="text-4xl font-bold mb-2">Currently in ear</h2>
              <div className="rounded-lg bg-[#332E2E] w-full p-4 mb-4 text-white">
                {!isLoadingCurr && currTrack ? <CurrSongPreview {...currTrack} /> : null}
              </div>

              <h2 className="text-4xl font-bold mb-2">My top 10</h2>
              <div className="songList rounded-lg bg-[#332E2E] w-full text-white overflow-auto flex-1">
                <div className="list-group border-black w-full">
                  {!isLoadingTopItems && topItems
                    ? topItems.map((elem) => <TopItem key={elem.name} className="w-full border-b border-black py-2 px-2" {...elem} />
                    )
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicCont;

