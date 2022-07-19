import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Main.scss";

const Main = () => {
  const [movie, setMovie] = useState("");
  const [apiConfig, setApiConfig] = useState({
    movieId: "550",
    movieQuery: "comedy",
  });
  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${apiConfig.movieQuery}`;
 

  const getMovies = async () => {
    try {
      const { data } = await axios.get(url);
      setMovie(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleQuery = (e) => {
    setApiConfig({ ...apiConfig, [e.target.name]: e.target.value });
    console.log(apiConfig.movieQuery);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const query = await axios.get(urlSearch);
      setMovie(query.data);      
    } catch (error) {
      alert("couldn't find such movie'")
      console.log(error.data.message);
    }
  };

  const imagePath = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container text-center">
      <div className="formDiv p-2">
        <input
          type="text"
          name="movieQuery"
          id="search"
          placeholder="Search genre"
          onChange={(e) => handleQuery(e)}
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </div>
      <div className="cardContainer">
        {movie?.results?.map((item) => {
          const { id, title, poster_path, overview } = item;
          const image = `${imagePath}${poster_path}`;
          // console.log(image);
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              overview={overview}
              image={image}
              apiConfig={apiConfig}
              apiKey={apiKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
