import './music_cont.css'
import { get_currTrack, get_playlist, get_top_items } from '../actions';
import { useQuery } from 'react-query';
import { CurrentSongData, filtered_top_data, filteredPlaylistData } from '../spotify_utils/types';
import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar'
import SongButton from './components/songButton';
import CurrSongPreview from './components/currSongPreview';
import TopItem from './components/topItem';
import Modal from './components/search_modal';


const MusicCont = ({ id }: { id: string }) => {
  const [input, setInput] = useState("")
  const [showModal, setModal] = useState(false)

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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up if component unmounts
    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal]);


  return (
    <div id={id} className="md:min-h-screen md:scroll-mt-32">
      <h1 className="text-6xl font-bold mx-2 mb-1 md:ml-6">Music ♫</h1>
      <div className="flex flex-col md:flex-row flex-wrap mx-2 md:mx-6 rounded-lg">
        {/* Left column */}
        <div className="w-full w-1/2 md:w-4/6 flex flex-col max-h-[75vh]">
          <SearchBar value={input} readonly={true} inputMode="none" className="w-full mb-2 cursor-pointer select-none" onChange={setInput} onClick={() => setModal(true)} />
          {showModal ? <Modal value={input} onChange={setInput} onClick={() => setModal(false)} /> : null}
          <div className="songList custom_bg overflow-auto w-full border-2 border-transparent rounded-lg flex-1">
            <div className="list-group border-black">
              {!isLoadingPlaylist && playListSongs
                ? playListSongs.map(({ song_name, song_url, album_cover, artists_data }) => (
                  <SongButton
                    key={song_name}
                    className="py-2 px-2 break-words song_button"
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
        <div className="w-full md:w-2/6 md:pl-4 mb-6 flex flex-col h-[75vh]">

          {/* Make sure this fills available height */}
          <div className="flex flex-col flex-1 h-full">
            <div className="py-2 flex flex-col flex-1 h-full md:px-2 md:py-0">
              <h2 className="text-4xl font-bold mb-1">In My Ears</h2>

              {/* First content block */}
              <div className="rounded-lg custom_bg w-full p-4 mb-4 text-white">
                {!isLoadingCurr && currTrack ? <CurrSongPreview {...currTrack} /> : null}
              </div>

              <h2 className="text-4xl font-bold mb-2">Top 10 Most Played</h2>

              {/* Second block: make scrollable if long */}
              <div className="topTenList custom_bg border-transparent border-2 rounded-lg w-full text-white overflow-auto flex-1 mb-1">
                <div className="list-group w-full">
                  {!isLoadingTopItems && topItems
                    ? topItems.map((elem) => (
                      <TopItem
                        key={elem.name}
                        className="w-full py-2 px-2 break-words song_button"
                        {...elem}
                      />
                    ))
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

