import React, { useState, useEffect } from "react";
import "./Playlist.css";
import { PlaylistCard } from "../../components";
import { useStateContext, useAppServices, useAuthContext } from "../../hooks";
import axios from "axios";

const Playlist = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { myToken } = useAuthContext();
  const { createPlaylists } = useAppServices();
  const [myPlaylistData, setMyPlaylistData] = useState([]);
  const { state, stateDispatch } = useStateContext();
  const { library } = state;
  const { playlist } = library;
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/playlists", {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
        if (res.status === 200) {
          setMyPlaylistData(res.data.playlists);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
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
                page={"Playlist"}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export { Playlist };
