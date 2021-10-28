import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Anime() {

  const[data , setData] = useState()
  const[type , setType] = useState("anime")

   useEffect(() => {
     async function getInfo() {
       try {
         const res = await axios.get(`https://kitsu.io/api/edge/${type}`)
         setData(res.data.data)
       } catch (err) {
         console.log(err);
       }
     }

     getInfo()
   }, [type])


  



  return (
    <div className="AnMa" id="AnMa">

      <div className="BTNs">
        <button onClick={() => setType("anime")} >Anime</button>
        <button onClick={() => setType("manga")} >Mange</button>
      </div>
    
    
      <div className="items">
        {data && 
            (data.map((ele)=> (
              <div className="item">
                <img src={ele.attributes.posterImage.small} />
                <h5>{ele.attributes.canonicalTitle}</h5>
              </div>
            )))
        }
      </div>
    </div>
  );
}

export default Anime;
