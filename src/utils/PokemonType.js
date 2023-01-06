import bug from "../assets/pokemon-types/bug.svg";
import dark from "../assets/pokemon-types/dark.svg";
import dragon from "../assets/pokemon-types/dragon.svg";
import electric from "../assets/pokemon-types/electric.svg";
import fairy from "../assets/pokemon-types/fairy.svg";
import fighting from "../assets/pokemon-types/fighting.svg";
import fire from "../assets/pokemon-types/fire.svg";
import flying from "../assets/pokemon-types/flying.svg";
import ghost from "../assets/pokemon-types/ghost.svg";
import grass from "../assets/pokemon-types/grass.svg";
import ground from "../assets/pokemon-types/ground.svg";
import ice from "../assets/pokemon-types/ice.svg";
import normal from "../assets/pokemon-types/normal.svg";
import poison from "../assets/pokemon-types/poison.svg";
import psychic from "../assets/pokemon-types/psychic.svg";
import rock from "../assets/pokemon-types/rock.svg";
import steel from "../assets/pokemon-types/steel.svg";
import water from "../assets/pokemon-types/water.svg";

export const getTypes = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel
      case "water":
        return water;
      default:
        return water;
    }
  };