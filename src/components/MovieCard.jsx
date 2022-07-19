import React from "react";
import "./MovieCard.scss";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, title, overview, image, apiConfig, apiKey }) => {
  const navigate = useNavigate();

  return (
    <div className="card cardsContainer">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        onClick={() =>
          navigate(`/home/${id}`)
        }
      />
      <h6 className="movieTitle">{title}</h6>
      <div className="card-body">
        <p className="card-text">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
