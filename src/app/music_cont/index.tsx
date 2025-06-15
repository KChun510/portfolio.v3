'use client'
import './music_cont.css'
import { get_currTrack, get_playlist } from '../actions';
import { useQuery } from 'react-query';
import { CurrentSongData, filteredPlaylistData } from '../spotify_utils/types';
import SearchBar from './components/searchBar'
import SongButton from './components/songButton';
import CurrSongPreview from './components/currSongPreview';

const MusicCont = ({ id }: { id: string }) => {
  const { data: playListSongs, isLoading: isLoadingPlaylist } = useQuery<filteredPlaylistData[]>({
    queryKey: ['playlistData'],
    queryFn: async () => await get_playlist()
  });

  const { data: currTrack, isLoading: isLoadingCurr } = useQuery<CurrentSongData>({
    queryKey: ['currTrackData'],
    queryFn: async () => await get_currTrack()
  });

  if (!isLoadingPlaylist && !isLoadingCurr) {
    console.log(currTrack)
    console.log(playListSongs)
  }

  return (
    <div id={id}>
      <h1 className="text-6xl font-bold ml-8 mb-2">Music ♫</h1>

      <div className="flex flex-col lg:flex-row items-stretch mt-1 mx-4 pb-6 min-h-[25vh] rounded-lg">
        {/* Left column */}
        <div className="w-full lg:w-4/6 px-4 mb-6 lg:mb- flex flex-col">
          <SearchBar className="w-full mb-2" />
          <div className="passion overflow-auto w-full border-2 border-black rounded rounded-lg">
            <div className="list-group border-black" >
              {(!isLoadingPlaylist && playListSongs) ? playListSongs.map(({ song_name, song_url, album_cover, artists_data }) => <SongButton key={song_name} className="border-b-1 border-black py-2 px-2" song_name={song_name} song_url={song_url} album_cover={album_cover} artists_data={artists_data} />) : null}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-2/6 px-4 mb-6 lg:mb- flex flex-col">
          <div className="passion flex flex-col flex-1 border-2 border-black rounded-lg bg-red-1">
            <div className="px-2 py-2">
              <h2 className="text-4xl font-bold mb-2">Currently in ear</h2>
              <div className="rounded-lg bg-[#332E2E] w-full p-4 mb-4 text-white min-h-[15vh]">
                {!isLoadingCurr && currTrack ?
                  <CurrSongPreview song_name={currTrack.song_name} is_playing={currTrack.is_playing} progress_ms={currTrack.progress_ms} song_duration={currTrack.song_duration} song_direct_link={currTrack.song_direct_link} song_artists={currTrack.song_artists} song_cover_art={currTrack.song_cover_art} /> : null}
              </div>
              <h2 className="text-4xl font-bold mb-2">My top 10</h2>
              <div className="rounded-lg bg-[#332E2E] w-full p-4 text-white min-h-[5vh]">List preview</div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicCont;

