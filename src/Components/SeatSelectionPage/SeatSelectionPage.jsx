import React, { useState } from "react";
import { useContext } from "react";
import userDetailContext from "../../Context/UserDetail";
import { seats } from "../../assets/StaticData";
import { useNavigate } from "react-router-dom";
import "./SeatSelectionPage.css";

const SeatSelectionPage = () => {
  const navigate = useNavigate();

  const { finalTheater, finalMovie, selectedSeats, setSelectedSeats } =
    useContext(userDetailContext);
  const [seatsData] = useState(seats);

  const handleSeat = (seat) => {
    if (!seat.available) return;
    setSelectedSeats((preval) => {
      const isSeatslected = preval.includes(seat.number);

      if (isSeatslected) {
        return preval.filter((seatNumber) => seatNumber !== seat.number);
      } else {
        return [...preval, seat.number];
      }
    });
  };

  function submit() {
    navigate("/TicketPage");
  }

  return (
    <div className="seat-selection-container">
      <h3>
        Select your <span className="seats"> Seats</span>{" "}
      </h3>
      {finalMovie ? (
        <h3>
          {" "}
          Movie: <span className="movie-or-theater"> {finalMovie} </span>{" "}
        </h3>
      ) : (
        <> </>
      )}
      {finalTheater ? (
        <h3>
          {" "}
          Theater: <span className="movie-or-theater"> {finalTheater} </span>
        </h3>
      ) : (
        <></>
      )}
      <div className="screen"> Screen</div>
      <div className="seats-container">
        {seatsData.map((seat) => {
          return (
            <div
              key={seat.id}
              className={`seat ${
                seat.available
                  ? selectedSeats.includes(seat.number)
                    ? "selected"
                    : "available"
                  : "unavailable"
              }`}
              onClick={() => handleSeat(seat)}
            >
              {seat.number}
            </div>
          );
        })}
      </div>

      <button className="book-btn" onClick={submit}>
        {" "}
        Book Ticket{" "}
      </button>
    </div>
  );
};

export default SeatSelectionPage;
