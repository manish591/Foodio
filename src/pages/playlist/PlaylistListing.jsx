import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuthContext, useStateContext } from "../../hooks";
import { useParams } from "react-router-dom";

const PlaylistListing = () => {
  const { state } = useStateContext();
  const [selectedId, setSelectedId] = useState("");
  const { playlistId } = useParams();
  const { myToken } = useAuthContext();
  const [isLoading, setIsLoading] = useState(true);
  const [playlistListingData, setPlaylistListingData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
        if (res.status === 200) {
          setPlaylistListingData(res.data.playlist.videos);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <section className="playlist-listing__container grid">
      {isLoading ? null : (
        <>
          {playlistListingData.map((item) => {
            return (
              <div
                style={{ border: "1px solid black", blockSize: "200px" }}
              ></div>
            );
          })}
        </>
      )}
    </section>
  );
};

export { PlaylistListing };
