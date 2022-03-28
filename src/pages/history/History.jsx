import React from "react";
import "./History.css";
import { Thumbnail } from "../../components";

const History = () => {
  return (
    <div className="history">
      <section className="flex history__top">
        <span class="material-icons-outlined">history</span>
        <p className="hero">History (2 Videos)</p>
      </section>
      <section className="history__container grid">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </section>
    </div>
  );
};

export { History };
