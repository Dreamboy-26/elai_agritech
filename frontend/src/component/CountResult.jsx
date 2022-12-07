import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
const CountResult = () => {

    const navigate=useNavigate()
    const handleBack=()=>{
           navigate("/")
    }
  let result = JSON.parse(localStorage.getItem("count"));
  return (
    <div className='resultContainer'>
        <h1>CountResult:{result}</h1>
        <button className='backButton' onClick={handleBack}>Back</button>
    </div>
  )
}

export default CountResult