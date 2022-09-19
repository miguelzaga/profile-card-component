import { useState } from "react";

import bgTop from "/src/assets/images/bg-pattern-top.svg";
import bgBottom from "/src/assets/images/bg-pattern-bottom.svg";
import bgCard from "/src/assets/images/bg-pattern-card.svg";
import imgVictor from "/src/assets/images/image-victor.jpg";

function App() {
  return (
    <div className="wrapper">
      <main className="card">
        <img className="card__bg" alt="" src={bgCard} />
        <img className="card__img" alt="" src={imgVictor} />
        <div className="card__container">
          <div className="card__info">
            <h1 className="card__name">Victor Crest</h1>
            <h2 className="card__age">26</h2>
            <h2 className="card__location">London</h2>
          </div>
          <ul className="card__stats">
            <li className="card__stats-li">
              <h3 className="card__stats-num">80K</h3>
              <p className="card__stats-txt">Followers</p>
            </li>
            <li className="card__stats-li">
              <h3 className="card__stats-num">803K</h3>
              <p className="card__stats-txt">Likes</p>
            </li>
            <li className="card__stats-li">
              <h3 className="card__stats-num">1.4K</h3>
              <p className="card__stats-txt">Photos</p>
            </li>
          </ul>
        </div>
      </main>
      <img className="bg-top" alt="" src={bgTop} />
      <img className="bg-bottom" alt="" src={bgBottom} />
    </div>
  );
}

export default App;
