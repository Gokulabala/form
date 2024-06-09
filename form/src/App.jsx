import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'
import ClassRegistrationForm from './Components/ClassRegistrationForm'
import Registration from './Components/Registration'



function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ClassRegistrationForm/>
    </div>
  )
}

export default App
