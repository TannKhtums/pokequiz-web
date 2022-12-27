import React from "react";

import classes from "./PokemonImage.module.css";
import BlueEgg from '../images/blue_egg_new.png';
import GreenEgg from '../images/green_egg_new.png';
import RedEgg from '../images/red_egg_new.png';
import YellowEgg from '../images/yellow_egg_new.png';
// import PokeQuizImage from '../images/pokequiz.png';

const PokemonCardImage = (props) => {
  var imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.pokemonID}.png`;
  function checkForEggImage(pokemonID) {
    console.log(pokemonID)
    if (props.pokemonID === "blue_egg") {
      return <img className={classes.card} src={BlueEgg} alt="Pokemon" />
    } 
    if (props.pokemonID === "green_egg") {
      return <img className={classes.card} src={GreenEgg} alt="Pokemon" />
    } 
    if (props.pokemonID === "yellow_egg") {
      return <img className={classes.card} src={YellowEgg} alt="Pokemon" />
    } 
    if (props.pokemonID === "red_egg") {
      return <img className={classes.card} src={RedEgg} alt="Pokemon" />
    } 
    else {
      return <img className={classes.card} src={imgURL} alt="Pokemon" />
  
    }
  }
  
  return (
    <div id="test">
      {checkForEggImage(props.pokemonID)}
    </div>
  );
};

export default PokemonCardImage;
