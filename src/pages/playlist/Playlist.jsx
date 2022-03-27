import React from "react";
import "./Playlist.css";
import { PlaylistCard } from "../../components";

const Playlist = () => {
  return (
    <div className="playlist">
      <section className="playlist__top flex">
        <span class="material-icons-outlined">playlist_play</span>
        <p className="hero">Playlist (2 Playlist)</p>
      </section>
      <section className="playlist__container grid">
        <PlaylistCard />
      </section>
    </div>
  );
};

export { Playlist };
