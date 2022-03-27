import React from "react";
import "./WatchLater.css";
import { Thumbnail } from "../../components";

const WatchLater = () => {
  return (
    <div className="watch-later">
      <section className="watch-later__top flex">
        <span class="material-icons-outlined">watch_later</span>
        <p className="hero">Watch Later (2 Videos)</p>
      </section>
      <section className="watch-later__container grid">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </section>
    </div>
  );
};

export { WatchLater };
