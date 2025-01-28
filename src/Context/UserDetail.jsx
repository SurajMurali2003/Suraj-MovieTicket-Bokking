import { createContext, useState } from "react";

 const userDetailContext = createContext()


export const UserDetailProvider = ({children})=> {
  const [inputDetail, setInputDetail]= useState({Name:"",Email:"",Mobile:"",Date:"",Tickets:"",Location:""})
  const [selectedTheater, setSelectedTheater]= useState()
  const [selectedOption, setSelectedOption]= useState()
  const [finalMovie, setFinalMovie]= useState()
  const [finalTheater, setFinalTheater]= useState()  
  const [selectedMovie, setSelectedMovie]= useState()
  const [selectedSeats, setSelectedSeats]= useState([])
  const [theaterName, setTheaterName]= useState()
  const [movieName, setMovieName]= useState()
  

    return(
        <userDetailContext.Provider value={{
          inputDetail,setInputDetail,
          selectedOption,setSelectedOption,
          selectedTheater,setSelectedTheater,
          selectedMovie, setSelectedMovie,
          finalMovie,setFinalMovie,
          finalTheater,setFinalTheater,
          selectedSeats, setSelectedSeats,
          theaterName, setTheaterName,
          movieName,setMovieName
          


        }}>
        {children}
        </userDetailContext.Provider>
    )
}



export default userDetailContext