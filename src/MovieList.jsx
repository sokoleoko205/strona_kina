import React from 'react';
import './App.css';

const MovieList = ({ filmy }) => {
  return (
    <div>
      {Object.values(filmy.tytul).map((_, index) => (
        <div className='film' id={index} key={index}>
          <div id="lewo">
          <img id="zdjecie" src={filmy.zdj[index]} alt={filmy.tytul[index]} />
          </div>
          <div id="srodek">
                <h3 id="tytul">{filmy.tytul[index]}</h3>
                 <p id='gatunek'>{filmy.gatunek[index]}</p>
          </div>
         <div id="premiera">
                  <p id='studyjny'>{filmy.studyjny[index]}</p>
                  <p id='premiera'>{filmy.premiera[index]}</p>
         </div>
          <div id="czas">
                 <div id='czas1'>{filmy.czas1[index]}</div>
                <div id='czas1'>{filmy.czas2[index]}</div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
