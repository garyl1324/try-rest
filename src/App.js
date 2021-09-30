import './App.css';
import Axios from "axios"
import React, { useState } from 'react';

const App = () =>{
    const [joke, setJoke] = useState()
    const getJoke = () => {
        Axios.get("https://icanhazdadjoke.com/",{
            headers: {
              "Accept": "application/json"
            }
          }
        ).then(
            (response) => {
                //console.log(response);
                setJoke(response.data.joke);
            }
        );
    };
 return (
<div className="container"><button onClick={getJoke}>Dad Joke</button>
<br/><h3>{joke}</h3>
    </div>
 );
}



export default App;