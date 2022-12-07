import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
const HomePage = () => {
    
    let result = JSON.parse(localStorage.getItem("count")) ||0 ;
    const [count, setCount] = useState(result);

  const navigate = useNavigate();

  
  const handleCount = () => {
      
      setCount(count + 1);
      localStorage.setItem("count", count)
    };
    
  const handleClick = () => {
    navigate("/nextPage");
  };

  return (
    <div className="container">
      <h1>Count:{result}</h1>
      <button className="counterButton" onClick={handleCount}>
        BUTTON
      </button>
      <div>
        <button className="counterButton" onClick={handleClick}>
         
          BUTTON TO GO TO NEXT
        </button>
      </div>
    </div>
  );
};

export default HomePage;
