import React from "react";
import "./Chips.css";

const Chips = () => {
  return (
    <div className="chips-container chips">
      <ul className="chips__list flex">
        <li className="chips__item chips__item--all">
          <div className="chips__category">
            <p>All</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Web Development</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Coding</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Javascript</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>VsCode</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Python</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Python</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Python</p>
          </div>
        </li>
        <li className="chips__item">
          <div className="chips__category">
            <p>Python</p>
          </div>
        </li>
      </ul>
      <ul className="chips__list chips__list--navigation">
        <span class="material-icons-outlined chip-right">chevron_right</span>
        <span class="material-icons-outlined chip-left">chevron_left</span>
      </ul>
    </div>
  );
};

export { Chips };
