import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthContext, useStateContext, useScrollToTop } from "../../hooks";
import { useParams } from "react-router-dom";
import { Thumbnail } from "../../components";

const PlaylistListing = () => {
  const { state } = useStateContext();
  const [selectedId, setSelectedId] = useState("");
  const { playlistId } = useParams();
  const { myToken } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [playlistListingData, setPlaylistListingData] = useState([]);
  const { library } = state;
  const { playlist } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setPlaylistListingData(res.data.playlist.videos);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, [playlist]);

  useScrollToTop();

  return (
    <section className="playlist-listing__container grid">
      {isLoading ? null : (
        <>
          {playlistListingData.map((item) => {
            return (
              <Thumbnail
                key={item._id}
                video={item}
                page={"PlaylistListing"}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
              />
            );
          })}
        </>
      )}
    </section>
  );
};

export { PlaylistListing };
