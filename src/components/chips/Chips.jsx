import React, { useState, useEffect } from 'react';
import './Chips.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ACTION_TYPES } from 'reducer';
import { useStateContext } from 'hooks';
import toast from 'react-hot-toast';

const Chips = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state, stateDispatch } = useStateContext();
  const loaction = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/categories');
        if (res.status === 200) {
          stateDispatch({
            type: ACTION_TYPES.GET_CATEGORIES,
            payload: { categories: res.data.categories }
          });
          setIsLoading(false);
        }
        if (loaction.state) {
          stateDispatch({
            type: ACTION_TYPES.FILTER_BY_CATEGORY,
            payload: loaction.state
          });
        }
      } catch (err) {
        toast.error('Unable to get chips data');
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="chips-container chips">
      <ul className="chips__list flex">
        <li
          className={`chips__item ${
            state.filter.category === 'All' ? 'chips__item--selected' : ''
          }`}>
          <button
            type="button"
            className="chips__category"
            onClick={() => {
              stateDispatch({
                type: ACTION_TYPES.FILTER_BY_CATEGORY,
                payload: 'All'
              });
            }}>
            <p>All</p>
          </button>
        </li>
        {isLoading ? null : (
          <>
            {state.categoryData.map((item) => {
              return (
                <li
                  key={item._id}
                  className={`chips__item ${
                    state.filter.category === item.categoryName ? 'chips__item--selected' : ''
                  }`}>
                  <button
                    type="button"
                    className="chips__category"
                    onClick={() => {
                      stateDispatch({
                        type: ACTION_TYPES.FILTER_BY_CATEGORY,
                        payload: item.categoryName
                      });
                    }}>
                    <p>{item.categoryName}</p>
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
      <ul className="chips__list chips__list--navigation">
        <span className="material-icons-outlined chip-right">chevron_right</span>
        <span className="material-icons-outlined chip-left">chevron_left</span>
      </ul>
    </div>
  );
};

export { Chips };
