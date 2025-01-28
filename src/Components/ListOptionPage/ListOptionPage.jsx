import React, { useContext, useState } from "react";
import userDetailContext from "../../Context/UserDetail";
import { theatersData } from "../../assets/StaticData";
import { moviesData } from "../../assets/StaticData";
import { useNavigate } from "react-router-dom";
import "./ListOptionPage.css";

const ListOptionPage = () => {
  const navigate = useNavigate();

  const { selectedTheater, selectedMovie } = useContext(userDetailContext);
  const { selectedOption} = useContext(userDetailContext);

  const [theatersList] = useState(theatersData);
  const [moviesList] = useState(moviesData);

  const { setFinalMovie, setFinalTheater } = useContext(userDetailContext);

  const selectedTheaterData = theatersList.find(
    (currentData) => currentData.id == selectedTheater
  );
  const selectedMovieData = moviesList.find(
    (currentData) => currentData.id == selectedMovie
  );

  function handleMovieList(movie) {
    setFinalMovie(movie);
    navigate("/SeatSelectionPage");
  }

  function handleTheaterList(theater) {
    setFinalTheater(theater);
    navigate("/SeatSelectionPage");
  }
  return (
    <div className="list-option-page">
      {selectedOption == "Theaters" ? (
        <div>
          <h3>
            {" "}
            Select your <span className="movie-or-theaer1"> Movie </span>{" "}
          </h3>
          <h2>
            Movies playing in{" "}
            <span className="movie-or-theaer">
              {" "}
              {selectedTheaterData.theaterName}{" "}
            </span>
          </h2>

          <ol className="selection-list">
            {selectedTheaterData.movies.map((movie) => {
              return (
                <li key={movie}>
                  {" "}
                  <a onClick={() => handleMovieList(movie)}> {movie} </a>{" "}
                </li>
              );
            })}
          </ol>
        </div>
      ) : selectedOption == "Movies" ? (
        <div>
          <h3>
            {" "}
            Select your <span className="movie-or-theaer1"> Theater </span>{" "}
          </h3>
          <h2>
            {" "}
            <span className="movie-or-theaer">
              {" "}
              {selectedMovieData?.moviename}{" "}
            </span>{" "}
            Playing in
            <div>
              <ol className="selection-list">
                {selectedMovieData.theaters.map((theater) => {
                  return (
                    <li key={theater}>
                      {" "}
                      <a onClick={() => handleTheaterList(theater)}>
                        {" "}
                        {theater}
                      </a>{" "}
                    </li>
                  );
                })}
              </ol>
            </div>
          </h2>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default ListOptionPage;
