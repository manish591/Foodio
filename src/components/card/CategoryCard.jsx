import React from "react";

const CategoryCard = ({ _id, categoryName }) => {
  return (
    <section
      class="card card--text-over-media"
      style={{
        inlineSize: "100%",
        position: "relative",
        blockSize: "100%",
      }}
    >
      <div class="card__content-above" style={{ bottom: "10%" }}>
        <h3
          class="card__title"
          style={{
            color: "var(--text2)",
            marginBlockEnd: "2rem",
            fontSize: "var(--fs-800)",
          }}
        >
          {categoryName}
        </h3>
        <p class="card__author" style={{ color: "var(--text2)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          iusto voluptatem veniam magni similique voluptas mollitia neque
          excepturi! Recusandae, aliquid!
        </p>
      </div>
    </section>
  );
};

export { CategoryCard };
