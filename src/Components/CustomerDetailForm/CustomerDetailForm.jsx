import React, { useContext, useState } from "react";
import { locationData } from "../../assets/StaticData";
import userDetailContext from "../../Context/UserDetail";
import { useNavigate } from "react-router-dom";
import "./CustomerDetailForm.css";

const CustomerDetailForm = () => {
  const navigate = useNavigate();

  const [locationList] = useState(locationData);
  const {inputDetail, setInputDetail } = useContext(userDetailContext);

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputDetail((preval) => {
      return { ...preval, [name]: value };
    });
  }

  function submitData() {
    console.log(inputDetail);
    
    if(!inputDetail.Name || !inputDetail.Email || !inputDetail.Mobile || !inputDetail.Date || !inputDetail.Tickets || inputDetail.Location === ""){
      alert("Please enter all the details")
    }
    else{
      navigate("/SelectionPage");

    }
  }

  return (
    <div>
      <h1> Customer Detail Form</h1>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="Name">
            Name:{" "}
            <input
              id="Name"
              type="text"
              name="Name"
              value={inputDetail.Name}
              onChange={handleInput}
              placeholder="Enter your Name"
            />{" "}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Email">
            Email:{" "}
            <input
              id="Email"
              type="text"
              name="Email"
              value={inputDetail.Email}
              onChange={handleInput}
              placeholder="Enter your E-Mail"
            />{" "}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Mobile">
            Mobile:{" "}
            <input
              id="Mobile"
              type="text"
              name="Mobile"
              value={inputDetail.Mobile}
              onChange={handleInput}
              placeholder="Enter your Mobile Number"
            />{" "}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Date">
            Date:{" "}
            <input
              id="Date"
              type="date"
              name="Date"
              value={inputDetail.Date}
              onChange={handleInput}
              placeholder="Enter your Movie Date"
            />{" "}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="no-of-tic">
            Number-of-Tickets:{" "}
            <input
              id="name"
              type="number"
              name="Tickets"
              value={inputDetail.Tickets}
              onChange={handleInput}
              placeholder="Enter Numer of Tickets"
            />{" "}
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Location">
            Location:
            <select
              className="dropdown-menu"
              onChange={handleInput}
              name="Location"
              defaultValue=""
            >
              <option value="" disabled>
                {" "}
                Select Location{" "}
              </option>
              {locationList.map((locList) => {
                return <option key={locList.id}> {locList.location}</option>;
              })}
            </select>
          </label>
        </div>
      </form>

      <button className="submit-button" onClick={submitData}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export default CustomerDetailForm;
