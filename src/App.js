import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import Card from './Card';
import Footer from "./Footer";
require('dotenv').config()

function App() {
  
  const [data, setData] = useState([])
  const API_KEY = process.env.REACT_APP_API_VARIABLE
  const [showMore, setShow] = useState(false)


   useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key="+API_KEY+"&count=6&thumbs=true")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 


  function openCaption(){
      setShow(true)
    setTimeout(() =>{
      setShow(false)
    }, 90000);
  }

  function loadMore(){
    window.location.reload(false)
  }

  return (
    <div className="App">
        <Header/> 

        {data.map((imgObj, index) =>{
          const capt = imgObj.explanation;
          const truncated = capt.substring(0,100)  + "..."
          return(  
            <Card
        onClick={openCaption}
        id={index}
        key={index}
        img={imgObj.hdurl}
        description={showMore ? capt : truncated}
        title={imgObj.title}
        date={imgObj.date}
        copyright={imgObj.copyright} /> 
       )
        })} 
        <Footer
        onClick={loadMore} />
    </div>
  );
}

export default App;
