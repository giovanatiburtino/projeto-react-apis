import Router from './Router/Router';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from "axios"
import { BASE_URL } from './constants/url';
import { GlobalContext } from './context/GlobalContext';

function App() {
  const [pokelist, setPokelist] = useState([])
  const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokelist()
  }, [])

  const getPokelist = async () => {
    try{
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results)
    } catch(error) {
      console.log("Erro ao buscar lista de pokemons")
      console.log(error.response)
    }
  }
  
  const addToPokedex = (pokemon) => {
    const onPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!onPokedex) {
      const newPokedex = [...pokedex, pokemon];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemon) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemon.name
    );

    setPokedex(newPokedex);
  };

  const context = {
    pokedex, 
    setPokedex,
    pokelist,
    setPokelist,
    addToPokedex,
    removeFromPokedex
  }

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={context}>
        <Router/>
      </GlobalContext.Provider>
    </ChakraProvider>
  );
}

export default App;