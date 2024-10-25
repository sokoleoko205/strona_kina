import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList.jsx'

const App = () => {
  const [filmy, setFilmy]=useState({
    zdj: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],
    tytul: ["akademia pana kleksa","aquaman i zaginione królestwo","ferrari","fuks 2","matka siedzi z tylu"],
    gatunek: ["familijny","science-fiction/akcja","biograficzny/dramat","komedia/sensacyjny","komedia/dramat"],
    premiera: ["PREMIERA","","PREMIERA","PREMIERA","PREMIERA"],
    studyjny: ["STUDYJNY","","","","STUDYJNY"],
    czas1: ["18:00","19:00","15:00","17:00","18:30"],
    czas2: ["21:00","20:00","22:00","20:30","23:00"]
  });
  return (
    <div>
      <MovieList filmy={filmy}/>
    </div>
  );
};

export default App;
