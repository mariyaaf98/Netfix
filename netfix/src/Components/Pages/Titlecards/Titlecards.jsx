import React, { useEffect, useRef, useState } from 'react';
import './Titlecards.css';
import cards_data from '../../../assets/cards/cards_data';
import { Link } from 'react-router-dom';

const Titlecards = ({title,category}) => {

  const [apiData,setApiData]=useState([]);

  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJlZDY2ZjFmNTM4NjJjOGFiZDU2ZjRhYmY1ZGRiOCIsIm5iZiI6MTczNTQ4MjAzOS43OTcsInN1YiI6IjY3NzE1YWI3NWYxYzRmYTQ3MzYxNWExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JI4WbCVF8noQD0L8BylAgA6eZoAef4UtiPvKbwn8v7I'
    }
  };
  
  
  
  const handlewheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlewheel);
  },[])
    
  return (
    <div className="title-Cards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} />
                <p>{card.original_title}</p>
              </Link>
            );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
