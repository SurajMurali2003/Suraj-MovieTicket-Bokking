import React, { useContext } from "react";
import userDetailContext from "../../Context/UserDetail";
import "./TicketPage.css";

const TicketPage = () => {
  const { inputDetail } = useContext(userDetailContext);
  const { finalMovie, finalTheater } = useContext(userDetailContext);
  const { selectedSeats } = useContext(userDetailContext);

  return (
    <div className="ticket-card">
      <h1 className="ticket-title"> Your Ticket!</h1>

      <div className="ticket-info">
        <h3>
          Name: <span className="details"> {inputDetail.Name} </span>{" "}
        </h3>
        <h3>
          {" "}
          Mial: <span className="details"> {inputDetail.Email} </span>{" "}
        </h3>
        <h3>
          {" "}
          Date:<span className="details"> {inputDetail.Date} </span>{" "}
        </h3>
        <h3>
          Number of Tickets:{" "}
          <span className="details"> {inputDetail.Tickets} </span>{" "}
        </h3>
      </div>

      {finalMovie ? (
        <h2 className="ticket-movie">
          {" "}
          Movie:<span className="details"> {finalMovie} </span>{" "}
        </h2>
      ) : (
        <></>
      )}
      {finalTheater ? (
        <h2 className="ticket-theater">
          Theater: <span className="details"> {finalTheater} </span>
        </h2>
      ) : (
        <></>
      )}
      <h2 className="ticket-seats-heading"> Seat Number: </h2>
      <div className="ticket-seats">
        {selectedSeats.map((seatnum, index) => {
          return (
            <h4 key={index} className="seat-number">
              {" "}
              {seatnum}{" "}
            </h4>
          );
        })}
      </div>
    </div>
  );
};

export default TicketPage;
