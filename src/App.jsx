import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomerDetailForm from './Components/CustomerDetailForm/CustomerDetailForm'
import ListOptionPage from './Components/ListOptionPage/ListOptionPage'
import SeatSelectionPage from './Components/SeatSelectionPage/SeatSelectionPage'
import TicketPage from './Components/TicketPage/TicketPage'
import SelectionPage from './Components/SelectionPage/SelectionPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CustomerDetailForm/>} />
      <Route path='/SelectionPage' element={<SelectionPage/>} />
      <Route path='/ListOptionPage' element={<ListOptionPage/>} />
      <Route path='/SeatSelectionPage' element={<SeatSelectionPage/>} />
      <Route path='/TicketPage' element={<TicketPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App  
