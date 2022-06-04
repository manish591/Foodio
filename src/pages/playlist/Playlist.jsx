import React, { useState, useEffect } from 'react';
import './Playlist.css';
import axios from 'axios';
import { PlaylistCard } from 'components';
import { useStateContext, useAuthContext } from 'hooks';
import toast from 'react-hot-toast';

const Playlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { myToken } = useAuthContext();
  const [myPlaylistData, setMyPlaylistData] = useState([]);
  const { state } = useStateContext();
  const { library } = state;
  const { playlist } = library;
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/user/playlists', {
          headers: {
            authorization: myToken
          }
        });
        if (res.status === 200) {
          setMyPlaylistData(res.data.playlists);
          setIsLoading(false);
        }
      } catch (err) {
        toast.error('Unable to get playlist data');
        setIsLoading(false);
      }
    })();
  }, [playlist]);

  return (
    <div className="playlist">
      <section className="playlist__top flex">
        <span className="material-icons-outlined">playlist_play</span>
        <p className="hero">Playlist ({playlist.length} Playlist)</p>
      </section>
      {isLoading ? null : (
        <section className="playlist__container grid">
          {myPlaylistData.map((item) => {
            return (
              <PlaylistCard
                key={item._id}
                video={item}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                page="Playlist"
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export { Playlist };
