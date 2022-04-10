import React, { useState } from "react";
import "./Uploads.css";
import { Thumbnail } from "../../components";
import { useStateContext } from "../../hooks";

const Uploads = () => {
  const [selectedId, setSelectedId] = useState("");
  const { state } = useStateContext();
  return (
    <div className="uploads">
      <div className="uploads__top">
        <h2>Your Uploaded Videos: {state.library.uploads.length}</h2>
      </div>
      <div className="uploads__container grid">
        {state.library.uploads.map((item) => {
          return (
            <Thumbnail
              key={item._id}
              video={item}
              page={"Uploads"}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Uploads };
