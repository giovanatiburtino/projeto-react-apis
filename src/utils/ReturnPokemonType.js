import bug from '../assets/pokemon-types/bug.svg'
import fire from '../assets/pokemon-types/fire.svg'
import flying from '../assets/pokemon-types/flying.svg'
import grass from '../assets/pokemon-types/grass.svg'
import normal from '../assets/pokemon-types/normal.svg'
import poison from '../assets/pokemon-types/poison.svg'
import water from '../assets/pokemon-types/water.svg'

export const getTypes = (type) => {
    switch (type) {
      case "bug":
        return bug;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "grass":
        return grass;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "water":
        return water;
      default:
        return water;
    }
  };