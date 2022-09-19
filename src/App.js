import { useState } from "react";

function App() {
  return (
    <div className="wrapper">
      <img className="bg-top" alt="" src="" />
      <img className="bg-bottom" alt="" src="" />
      <main className="card">
        <img className="card__img" alt="" src="" />
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
    </div>
  );
}

export default App;
