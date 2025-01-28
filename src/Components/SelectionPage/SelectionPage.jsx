import React, { useContext, useState } from "react";
import { theatersData } from "../../assets/StaticData";
import { moviesData } from "../../assets/StaticData";
import { useNavigate } from "react-router-dom";
import userDetailContext from "../../Context/UserDetail";
import "./SelectionPage.css";

const SelectionPage = () => {
  const navigate = useNavigate();

  const [theatersList, setTheatersList] = useState(theatersData);
  const [moviesList, setMoviessList] = useState(moviesData);
  console.log(moviesData);

  const { selectedOption, setSelectedOption } = useContext(userDetailContext);
  const { selectedTheater, setSelectedTheater } = useContext(userDetailContext);
  const { selectedMovie, setSelectedMovie } = useContext(userDetailContext);

  function handleRadio(event) {
    setSelectedOption(event.target.value);
    console.log(event.target.checked);
  }
  console.log(theatersList);

  function handleTheater(theater) {
    setSelectedTheater(theater.id);
    navigate("/ListOptionPage");
  }

  function handleMovie(movie) {
    setSelectedMovie(movie.id);
    navigate("/ListOptionPage");
  }

  return (
    <div className="selection-page">
      <h1>
        {" "}
        Select <span className="movie-or-theater"> Theater </span> or{" "}
        <span className="movie-or-theater"> Movie</span>
      </h1>

      <form className="radio-group">
        <label htmlFor="theaters">
          {" "}
          Theaters{" "}
          <input
            id="theaters"
            type="radio"
            value="Theaters"
            onChange={handleRadio}
            checked={selectedOption == "Theaters"}
          />{" "}
        </label>
        <label htmlFor="Movies">
          {" "}
          Movies{" "}
          <input
            id="Movies"
            type="radio"
            value="Movies"
            onChange={handleRadio}
            checked={selectedOption == "Movies"}
          />{" "}
        </label>
      </form>

      {selectedOption == "Theaters" ? (
        <div>
          <h2>
            {" "}
            Choose <span className="choose">Theater </span>{" "}
          </h2>

          <ol className="selection-list">
            {theatersList.map((theater) => {
              return (
                <li key={theater.id}>
                  {" "}
                  <a onClick={() => handleTheater(theater)}>
                    {theater.theaterName}{" "}
                  </a>{" "}
                  {theater.location}
                </li>
              );
            })}
          </ol>
        </div>
      ) : selectedOption == "Movies" ? (
        <div>
          <h2>
            {" "}
            Choose <span className="choose">Movie </span>{" "}
          </h2>
          <ol className="selection-list">
            {moviesList.map((movie) => {
              return (
                <li key={movie.id}>
                  {" "}
                  <a
                    onClick={() => {
                      handleMovie(movie);
                    }}
                  >
                    {movie.moviename}{" "}
                  </a>{" "}
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SelectionPage;
