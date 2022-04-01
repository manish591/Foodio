import React, { useEffect, useState } from "react";
import "./History.css";
import { Thumbnail } from "../../components";
import { useStateContext } from "../../hooks";
import { useAuthContext } from "../../hooks";
import { useAppServices } from "../../hooks";
import axios from "axios";

const History = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const { state } = useStateContext();
  const { myToken } = useAuthContext();
  const { removeAllVideosFromHistory } = useAppServices();
  const { library } = state;
  const { history } = library;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/user/history", {
          headers: {
            authorization: myToken,
          },
        });
        if (res.status === 200) {
          setHistoryData(res.data.history);
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, [history]);

  return (
    <div className="history">
      <section className="flex history__top">
        <span className="material-icons-outlined">history</span>
        <p className="hero">History ({history?.length} Videos)</p>
        {history?.length === 0 ? null : (
          <button
            className="flex history__clear"
            onClick={() => {
              removeAllVideosFromHistory();
            }}
          >
            <span className="material-icons">clear</span>
            <p>Clear History</p>
          </button>
        )}
      </section>
      {isLoading ? null : (
        <section className="history__container grid">
          {historyData.map((item) => {
            return (
              <Thumbnail
                key={item._id}
                video={item}
                page={"History"}
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

export { History };
