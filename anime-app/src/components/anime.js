import React, { useState } from 'react'
import axios from 'axios'


function Anime() {

  const[data , setData]=useState('')

   async function getInfo (){
     const data = await axios.get('https://kitsu.io/api/edge/trending/anime')
     console.log(data)
     console.log(data.data)
     console.log(data.data.data)
     setData(data.data.data)
     

   } 








  return (
    <div className="App">

    <button onClick={getInfo} >Anime</button>
    
    {data && 
      <>
        {data.map((ele)=> (
          <div>
          <h1>{ele.attributes.canonicalTitle}</h1>
          <img src={ele.attributes.posterImage.large} />
          </div>
        ))}
      </>
    }

      
    </div>
  );
}

export default Anime;
