export const getProgressColor = (type) => {
    switch (type) {
      case "bug":
        return "green";
      case "dark":
        return "gray"
      case "dragon":
        return "twitter";
      case "electric":
        return "yellow";
      case "fairy":
        return "pink";
      case "fighting":
        return "red";
      case "fire":
        return "orange";
      case "flying":
        return "facebook";
      case "ghost":
        return "facebook";
      case "grass":
        return "green";
      case "ground":
        return "orange";
      case "ice":
        return "cyan";
      case "normal":
        return "gray";
      case "poison":
        return "pink";
      case "pyschic":
        return "red";
      case "rock":
        return "gray";
      case "steel":
        return "gray";
      case "water":
        return "twitter";
      default:
        return "gray";
    }
  };