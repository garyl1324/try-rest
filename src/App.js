import './App.css';
import Axios from "axios"

const App = () =>{
    const getJoke = () => {
        Axios.get("https://icanhazdadjoke.com/"
        ).then(
            (response) => {
                console.log(response);
            }
        );
    };
 return (
<div className="container"><button onClick={getJoke}>Dad Joke</button>
<br/><p>Hi!</p>
    </div>
 );
}



export default App;