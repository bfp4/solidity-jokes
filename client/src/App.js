import { useEffect, useState } from "react"
import Web3 from "web3"
import { JOKES_ABI, JOKES_ADDRESS } from './config';
import "./App.css"

import Header from "./components/header/Header";
import JokeBox from "./components/joke-box/JokeBox";
import AddJokeButton from "./components/add-joke-button/AddJokeButton";
import AddJokeModal from "./components/add-joke-modal/AddJokeModal";

function App() {
  const [modal, setModal] = useState(false)
  // const [account, setAccount] = useState(); 
  // const [jokesObject, setJokesObject] = useState();
  // const [jokes, setJokes] = useState([])
  
  // useEffect(() => {
  //   (async () => {
  //     const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  //     const accounts = await web3.eth.requestAccounts();
      
  //     setAccount(accounts[0]);

  //     const jokesObject = new web3.eth.Contract(JOKES_ABI, JOKES_ADDRESS);

  //     setJokesObject(jokesObject)
      
  //     const jokesCounter = await jokesObject.methods.jokesCount().call()

  //     for(let i = 1; i <= jokesCounter; i++){
  //       const joke = await jokesObject.methods.jokes(i).call()

  //       setJokes(jokes => [...jokes, joke])
  //     }
  //   })();
  //  }, []);

  return (
    <div>
      <Header />
      <div className="jokes-container">
        <div className="jokes-column">
        </div>
        
        <div className="jokes-column">
        </div>
        
        <div className="jokes-column">
        </div>
        <AddJokeButton setModal={setModal}/>
        {modal && <AddJokeModal setModal={setModal}/>}
      </div>
    </div>
  );
}

export default App;
