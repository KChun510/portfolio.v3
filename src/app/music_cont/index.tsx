import './music_cont.css'
import { get_currTrack, get_playlist, get_session_browser, get_session_db, get_top_items, select_all_session } from '../actions';
import { useQuery } from 'react-query';
import { CurrentSongData, filtered_top_data, filteredPlaylistData } from '../spotify_utils/types';
import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar'
import SongButton from './components/songButton';
import CurrSongPreview from './components/currSongPreview';
import TopItem from './components/topItem';
import Modal from './components/search_modal';
import { import_session_data } from '../../../db_actions/types';

const MusicCont = ({ id }: { id: string }) => {
  const [input, setInput] = useState("")
  const [showModal, setModal] = useState(false)

  const { data: playListSongs, isLoading: isLoadingPlaylist, refetch: re_playlist } = useQuery<filteredPlaylistData[]>({
    queryKey: ['playlistData'],
    queryFn: async () => await get_playlist()
  })

  const { data: currTrack, isLoading: isLoadingCurr, refetch: re_currTrack } = useQuery<CurrentSongData>({
    queryKey: ['currTrackData'],
    queryFn: async () => await get_currTrack(),
    refetchInterval: 15000, // Refetch every 5 seconds
  })

  const { data: topItems, isLoading: isLoadingTopItems } = useQuery<filtered_top_data[]>({
    queryKey: ['topItemsData'],
    queryFn: async () => await get_top_items()
  })

  const { data: dbData, isLoading: isDbDataLoading, refetch: re_dbData } = useQuery<import_session_data[]>({
    queryKey: ['dbData'],
    queryFn: async () => await select_all_session()
  })

  const { data: browserData, isLoading: isBrowserLoading, refetch: re_browserData } = useQuery({
    queryKey: ['browserData'],
    queryFn: async () => await get_session_browser()
  })

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [showModal, dbData, playListSongs]);

  return (
    <div id={id} className="md:min-h-screen md:scroll-mt-32">
      <h1 className="text-6xl font-bold mx-2 mb-1 md:ml-6">Music ♫</h1>
      <div className="flex flex-col flex-wrap mx-2 gap-y-4 sm:flex-row sm:mx-6 rounded-lg">
        {/* Left column */}
        <div className="w-full w-1/2 md:w-4/6 flex flex-col max-h-[75vh]">
          <div className="border-b border-gray-700 sm:border-none pb-4">
            <SearchBar value={input} readonly={true} inputMode="none" className="w-full mb-2 cursor-pointer select-none" onChange1={setInput} onClick={() => setModal(true)} />
            {showModal && playListSongs ? <Modal value={input} onChange={setInput} songData={playListSongs} onClick={() => setModal(false)} refetchFn1={re_playlist} refetchFn2={re_dbData} refetchFn3={re_browserData} /> : null}
            <div className="songList custom_bg overflow-auto w-full border-2 border-transparent rounded-lg flex-1 max-h-[66vh]">
              <div className="list-group border-black">
                {!isLoadingPlaylist && playListSongs && !isDbDataLoading && dbData
                  ? playListSongs.map(({ song_name, song_url, album_cover, artists_data, uri }) => {
                    let user_tag = null
                    let modify_avail = false
                    let track_owner_session_id = null
                    for (const obj of dbData) {
                      if (obj.song_names.includes(song_name)) {
                        if (browserData.session === obj.session) { modify_avail = true }
                        track_owner_session_id = obj.session
                        user_tag = obj.user_tag === "" ? null : obj.user_tag
                        break
                      }
                    }
                    return (
                      <SongButton
                        key={song_name}
                        className="py-2 px-2 break-words song_button"
                        song_name={song_name}
                        song_url={song_url}
                        album_cover={album_cover}
                        artists_data={artists_data}
                        user_tag={user_tag}
                        modify_avail={modify_avail}
                        uri={uri}
                        refetch={re_playlist}
                        sessionID={track_owner_session_id}
                      />
                    )
                  })
                  : null}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Playlist: <a href="https://open.spotify.com/playlist/1w7opBRG814H7CMZaMOCN7?si=670ec78074f942ac" target='_blank' className="text-[#8746ff] underline font-semibold">Flavor Town</a>
            </p>
          </div>
        </div>
        {/* Right column */}
        <div className="w-full md:w-2/6 md:pl-4 mb-6 flex flex-col h-[75vh]">
          {/* Make sure this fills available height */}
          <div className="flex flex-col flex-1 h-full">
            <div className="py-2 flex flex-col flex-1 h-full md:px-2 md:py-0">

              <div className="border-b border-gray-700 sm:border-none pb-4">
                <h2 className="text-3xl font-bold mb-1">In My Ears</h2>
                {/* First content block */}
                <div className="rounded-lg custom_bg w-full p-4 mb-4 text-white">
                  {!isLoadingCurr && currTrack ? <CurrSongPreview {...currTrack} refetchFn={re_currTrack} /> : null}
                </div>
              </div>

              <div className="flex flex-row items-center pt-4 md:pt-0 gap-x-4">
                <h2 className="text-3xl font-bold mb-2">Top 10 Most Played</h2>
                <p>(Monthly)</p>
              </div>
              {/* Second block: make scrollable if long */}
              <div className="topTenList custom_bg border-transparent border-2 rounded-lg w-full text-white overflow-auto flex-1 mb-1 max-h-[45.4vh]">
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

