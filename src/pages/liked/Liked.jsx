import React from "react";
import styles from "./Liked.module.css";
import { Thumbnail } from "../../components";

const LikedVideos = () => {
  return (
    <div className={styles.liked}>
      <section className={`flex ${styles.liked__top}`}>
        <span class="material-icons">thumb_up_off_alt</span>
        <p className="hero">Liked (0 Videos)</p>
      </section>
      <section className={`${styles.liked__container} grid`}></section>
    </div>
  );
};

export { LikedVideos };
