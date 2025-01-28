import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserDetailProvider } from './Context/UserDetail.jsx'

createRoot(document.getElementById('root')).render(

       <UserDetailProvider>
        <App/>
       </UserDetailProvider>
      
    
  
)
