import axios from "axios";
import React, { useState, useEffect } from "react";
import { ACTION_TYPES } from "../../reducer/state-constant";
import { useStateContext } from "../../hooks";
import "./Chips.css";

const Chips = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, stateDispatch } = useStateContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/categories");
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_CATEGORIES,
            payload: { categories: res.data.categories },
          });
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="chips-container chips">
      <ul className="chips__list flex">
        <li
          className={`chips__item ${
            state.filter.category === "All" ? "chips__item--selected" : ""
          }`}
          onClick={() => {
            stateDispatch({
              type: ACTION_TYPES.FILTER_BY_CATEGORY,
              payload: "All",
            });
          }}
        >
          <div className="chips__category">
            <p>All</p>
          </div>
        </li>
        {isLoading ? null : (
          <>
            {state.categoryData.map((item) => {
              return (
                <li
                  key={item._id}
                  className={`chips__item ${
                    state.filter.category === item.categoryName
                      ? "chips__item--selected"
                      : ""
                  }`}
                  onClick={() => {
                    stateDispatch({
                      type: ACTION_TYPES.FILTER_BY_CATEGORY,
                      payload: item.categoryName,
                    });
                  }}
                >
                  <div className="chips__category">
                    <p>{item.categoryName}</p>
                  </div>
                </li>
              );
            })}
          </>
        )}
      </ul>
      <ul className="chips__list chips__list--navigation">
        <span className="material-icons-outlined chip-right">
          chevron_right
        </span>
        <span className="material-icons-outlined chip-left">chevron_left</span>
      </ul>
    </div>
  );
};

export { Chips };
