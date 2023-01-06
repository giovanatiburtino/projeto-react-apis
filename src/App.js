import Router from './Router/Router';
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import axios from "axios"
import { BASE_URL } from './constants/url';
import { GlobalContext } from './context/GlobalContext';


function App() {
  const [pokelist, setPokelist] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [gotcha, setGotcha] = useState(false)
  const [ohNo, setOhNo] = useState(false)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    getPokelist()
  }, [])

  const getPokelist = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/?limit=50`);
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
      setGotcha(true)
    }
  };

  const removeFromPokedex = (pokemon) => {
    const pokemonToRemove = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemon.name
    );

    setPokedex(pokemonToRemove);
    setOhNo(true)
  }; 

  const anotherRemoveFromPokedex = (pokemon) => {
    const onPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if(onPokedex){
      const pokemonToRemove = pokedex.filter(
        (pokemonInPokedex) => pokemonInPokedex.name !== pokemon.name
      );
      setPokedex(pokemonToRemove)
      setOhNo(true)
    } else {
      setNotFound(true)
    }
  }


  const context = {
    pokedex, 
    setPokedex,
    pokelist,
    setPokelist,
    addToPokedex,
    removeFromPokedex,
    gotcha,
    setGotcha,
    ohNo,
    setOhNo,
    anotherRemoveFromPokedex,
    notFound,
    setNotFound
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
