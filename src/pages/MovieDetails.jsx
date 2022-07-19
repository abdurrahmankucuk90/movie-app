import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const [currMovie, setCurrMovie] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const { id } = useParams();

  const urlDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

  const getDetail = async () => {
    try {
      const { data } = await axios.get(urlDetail);
      setCurrMovie(data);
      // console.log(currMovie.genres);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div key={id} className="detailContainer">
      <div className="DContainer">
        <h6>
          {" "}
          Name: <span>{currMovie.title}</span>{" "}
        </h6>
        <h6>
          Genres:
          {currMovie.genres?.map((genre, index) => {
            return (
              <span key={index} className="mx-1">
                {genre.name}
              </span>
            );
          })}
        </h6>
        <h6>
          Release Date: <span>{currMovie.release_date}</span>
        </h6>
        <h6>
          Popularity: <span>{currMovie.popularity}</span>
        </h6>
        <h6>
          Vote Points: <span>{parseFloat(currMovie.vote_average)}</span>
        </h6>
        <h6>
          Vote Count: <span>{currMovie.vote_count}</span>
        </h6>
        <h6>
          Is it for adults:{" "}
          <span>{currMovie.adult ? "for Adults" : "for Anyone"}</span>
        </h6>
        <h6>
          Original Language: <span>{currMovie.original_language}</span>
        </h6>
        <h6>
          Production Companies:
          {currMovie.production_companies?.map((company, index) => {
            return (
              <span key={index} className="mx-1">
                {company.name}
              </span>
            );
          })}
        </h6>
      </div>

      <div className="PContainer">
        <img
          src={`https://image.tmdb.org/t/p/original${currMovie.poster_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieDetails;
