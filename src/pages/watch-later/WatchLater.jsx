import React, { useState, useEffect } from "react";
import "./WatchLater.css";
import { Thumbnail } from "../../components";
import { useStateContext } from "../../hooks";
import { useAuthContext } from "../../hooks";
import axios from "axios";
import { ACTION_TYPES } from "../../reducer";

const WatchLater = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [watchLaterData, setWatchLaterData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const { state, stateDispatch } = useStateContext();
  const { myToken } = useAuthContext();
  const { library } = state;
  const { watchLater } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/watchlater", {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setWatchLaterData(res.data.watchlater);
          setIsLoading(false);
        }
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    })();
  }, [watchLater]);

  return (
    <div className="watch-later">
      <section className="watch-later__top flex">
        <span className="material-icons-outlined">watch_later</span>
        <p className="hero">Watch Later ({watchLater?.length} Videos)</p>
      </section>
      {isLoading ? null : (
        <section className="watch-later__container grid">
          {watchLaterData.map((item) => {
            return (
              <Thumbnail
                key={item._id}
                video={item}
                page={"WatchLater"}
                setSelectedId={setSelectedId}
                selectedId={selectedId}
              />
            );
          })}
        </section>
      )}
    </div>
  );
};

export { WatchLater };
