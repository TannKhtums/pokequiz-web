import React from "react";
import {useState} from "react";

import './App.css';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav'
import PokemonCardImage from './PokemonCard/PokemonCardImage';
import Button from './Button';
// import { click } from "@testing-library/user-event/dist/click";

function App() {

  const [number, setNumber] = useState("001")
  const [lowerRangeNumber, setLowerRangeNumber] = useState(1);
  const [upperRangeNumber, setUpperRangeNumber] = useState(900);
  const [veryEasyIcon, setVeryEasyIcon] = useState("green_egg")
  const [easyIcon, seteasyIcon] = useState("001")
  const [mediumIcon, setMediumIcon] = useState("002")
  const [hardIcon, setHardIcon] = useState("003")
  const [veryHardIcon, setVeryHardIcon] = useState("003_f2")

  const generateRandom = (minimum, maximum) => {
    let difference = maximum - minimum;
    console.log(`difference: ${difference}`)
    let random = Math.random()
    console.log(`random: ${random}`)
    random = Math.floor( random * difference )
    console.log(`random (math.floor(random * difference)): ${random}`)
    random = Number(random) + Number(minimum);
    console.log(`random (math.floor(random + minimum)): ${random}`)
    if (random < 10 && random < 100) {
      random = "00" + random
    } else if (random >= 10 && random < 100) {
      random = "0" + random
    }
    console.log(random)
    return random
  }
  // const lowerRangeChangeHandler = (event) => {
  //   setLowerRangeNumber(event.target.value);
  // };

  // const upperRangeChangeHandler = (event) => {
  //   setUpperRangeNumber(event.target.value);
  // };

  const clickHandlerTest = (event) => {
    event.preventDefault();
    console.log(lowerRangeNumber, upperRangeNumber)
    setNumber(generateRandom(lowerRangeNumber, upperRangeNumber))
  };

  const greenLevelIconUpdate = () => {
    console.log(veryEasyIcon)
    setVeryEasyIcon("green_egg")
    seteasyIcon("001")
    setMediumIcon("002")
    setHardIcon("003")
    setVeryHardIcon("003_f2")
  }
  const redLevelIconUpdate = () => {
    console.log(veryEasyIcon)
    setVeryEasyIcon("red_egg")
    seteasyIcon("004")
    setMediumIcon("005")
    setHardIcon("006")
    setVeryHardIcon("006_f3")
  }

  const blueLevelIconUpdate = () => {
    console.log(veryEasyIcon)
    setVeryEasyIcon("blue_egg")
    seteasyIcon("007")
    setMediumIcon("008")
    setHardIcon("009")
    setVeryHardIcon("009_f2")
  }

  const yellowLevelIconUpdate = () => {
    console.log(veryEasyIcon)
    setVeryEasyIcon("yellow_egg")
    seteasyIcon("172")
    setMediumIcon("025")
    setHardIcon("026")
    setVeryHardIcon("145")
  }

  // Next step: add error handling
  // Review Code I've written so far: clear up anything I'm not understanding well

  return (
    <body className="body">
      <Header />
      <main className="content">
      <div className="main-container">
      <SideNav />
      <div className="main">
      <div className="random-generator">
        <h1>Random Pokemon Generator</h1>
        <p>Add the lower and upper range and click submit to generate a random Pokemon in the range you specify.</p>
        <PokemonCardImage pokemonID={number} />
        <form onSubmit={clickHandlerTest}>
          <input
                id="lowerRange"
                name="Lower Range"
                type="number"
                value={lowerRangeNumber}
                onChange={event => setLowerRangeNumber(event.target.value)}
              />
                      <input
                id="upperRange"
                name="Upper Range"
                type="number"
                value={upperRangeNumber}
                onChange={event => setUpperRangeNumber(event.target.value)}
              />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <hr></hr>
      <div className="level-color-buttons">
        <Button type="button" onClick={greenLevelIconUpdate}>Green</Button>
        <Button type="button" onClick={redLevelIconUpdate}>Red</Button>
        <Button type="button" onClick={blueLevelIconUpdate}>Blue</Button>
        <Button type="button" onClick={yellowLevelIconUpdate}>Yellow</Button>
      </div>
      <div className="level-icons">
      <PokemonCardImage pokemonID={veryEasyIcon} />
      <PokemonCardImage pokemonID={easyIcon} />
      <PokemonCardImage pokemonID={mediumIcon} />
      <PokemonCardImage pokemonID={hardIcon} />
      <PokemonCardImage pokemonID={veryHardIcon} />
      </div>
      </div>
      </div>
      </main>
    </body>
  );
}

export default App;
