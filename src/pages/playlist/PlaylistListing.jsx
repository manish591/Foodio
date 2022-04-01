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

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: {
            authorization: myToken,
          },
        });
        console.log(res);
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
          <div style={{ border: "1px solid black", blockSize: "200px" }}></div>
          <div style={{ border: "1px solid black", blockSize: "200px" }}></div>
          <div style={{ border: "1px solid black", blockSize: "200px" }}></div>
        </>
      )}
    </section>
  );
};

export { PlaylistListing };
