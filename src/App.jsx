import { useState } from 'react'
import './App.css'
import axios from 'axios';
import caramelos from "./image/caramelos.png"
import micro from "./image/micro.webp"
import nicole from "./image/Nicole.jpg"

function App() {
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);
  
  function searchSongs() {
    //Set up the correct API Call
    var APICallString = "http://localhost:4000/api/songs/"+searchText;
  
    //Handle the APICall
    axios.get(APICallString).then(function(resp){
      setSongData(resp.data);
    }).catch(function(error){
      console.log(error);
    });
  }
  
    return (
      <>
      <div className="Cards">
      <p>Lo mas sonado</p>
    <div className="ImageContent">
    <img className='Image' src={caramelos} alt="" />
    <img className='Image' src={micro} alt="" />
    <img className='Image' src={nicole} alt="" />
    </div>
  </div>
      <div className="App">
        <div className='container'>
          <h5>Buscar canciones</h5>
          <input type="text" placeholder='Buscar' onChange={e => setSearchText(e.target.value)} />
          <button onClick={e => searchSongs(e)}>Buscar</button>
         {
           songData.map((song)=>(
           <div key={song._id}>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
           </div>))
         }
        </div>
      </div>
      </>
    )
  }

export default App;

