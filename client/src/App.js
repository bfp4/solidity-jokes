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
  const [account, setAccount] = useState(); 
  const [jokesObject, setJokesObject] = useState();
  const [jokes, setJokes] = useState([])
  const [jokesLoaded, setJokesLoaded] = useState(false)
  const [jokesPlacement, setJokesPlacement] = useState([[], [], []])
  
  useEffect(() => {
    (async () => {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);

      const jokesObject = new web3.eth.Contract(JOKES_ABI, JOKES_ADDRESS);

      setJokesObject(jokesObject)
      
      const jokesCounter = await jokesObject.methods.jokesCount().call()

      for(let i = 1; i <= jokesCounter; i++){
        const joke = await jokesObject.methods.jokes(i).call()

        await setJokes(jokes => [...jokes, joke])
      }
      await setJokesLoaded(true)
    })();
   }, []);

   useEffect(() => {
    if(!jokesLoaded) return
    console.log(jokes)
    let divide = Math.floor(jokes.length / 3)

    const one = jokes.filter((el, i) => {
      if(!(i >= divide)) return el
    })

    const two = jokes.filter((el, i) => {
      if(!(i < divide || i >= divide*2)) return el
    })

    const three = jokes.filter((el, i) => {
      if(!(i <= divide*2 || i >= jokes.length)) return el
    })

    const a = [one, two, three]
    console.log(a)

    setJokesPlacement([one, two, three])
   }, [jokesLoaded])

  return (
    <div>
      <Header />
      {
        jokesLoaded &&
        <div className="jokes-container">
          <div className="jokes-column">
            {
              jokesPlacement[0].map(el => {
                return (
                  <JokeBox
                    key={el.id}
                    line={el.joke}
                    punchline={el.punchline}
                  />
                )
              })
            }
          </div>
          
          <div className="jokes-column">
            {
              jokesPlacement[1].map(el => {
                return (
                  <JokeBox
                    key={el.id}
                    line={el.joke}
                    punchline={el.punchline}
                  />
                )
              })
            }
          </div>
          
          <div className="jokes-column">
            {
              jokesPlacement[2].map(el => {
                return (
                  <JokeBox
                    key={el.id}
                    line={el.joke}
                    punchline={el.punchline}
                  />
                )
              })
            }
          </div>
          <AddJokeButton setModal={setModal}/>
          {modal && <AddJokeModal setModal={setModal}/>}
        </div>
      }
    </div>
  );
}

export default App;
