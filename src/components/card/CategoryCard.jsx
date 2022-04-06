import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

const CategoryCard = ({ _id, categoryName }) => {
  const navigate = useNavigate();

  return (
    <section
      className="card card--text-over-media"
      style={{
        inlineSize: "100%",
        position: "relative",
        blockSize: "100%",
      }}
      onClick={() => navigate("/explore", { state: categoryName })}
    >
      <div className="card__content-above" style={{ bottom: "10%" }}>
        <h3
          className="card__title"
          style={{
            color: "var(--text2)",
            marginBlockEnd: "2rem",
            fontSize: "var(--fs-800)",
          }}
        >
          {categoryName}
        </h3>
        <p className="card__author" style={{ color: "var(--text2)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iusto voluptatem veniam magni similique voluptas mollitia neque
          excepturi! Recusandae, aliquid!
        </p>
      </div>
    </section>
  );
};

export { CategoryCard };
