import React, { useEffect, useState } from "react";
import { PokemonName, PokemonType, TypesContainer, Pokemon, PokemonSecondType, PokemonContainer, PokemonId, Pokeball} from "./styled";
import pokeball from "../../assets/pokemon-wing.svg";
import axios from "axios";
import { getColors } from "../../utils/ReturnCardColor";
import { getTypes } from "../../utils/ReturnPokemonType";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../Router/coordinator";

const Card = (props) => {

const { pokemonUrl , addToPokedex, removeFromPokedex } = props

const [pokemon, setPokemon] = useState({})

const [pokemonType, setPokemonType] = useState({})

const [pokemonType2, setPokemonType2] = useState({})

const location = useLocation() //mostra o path atual

const navigate = useNavigate() // redireciona para outra página

useEffect(() => {
    getPokemon()
}, [])

const getPokemon = async () => {
    try{
        const response = await axios.get(pokemonUrl);
        setPokemon(response.data)
        if(response.data.types[0]){
          setPokemonType(response.data.types[0].type.name)
        } if (response.data.types[1]){
          setPokemonType2(response.data.types[1].type.name)
        }
    } catch(error) {
        console.log("Erro ao buscar lista de pokemons")
        console.log(error.response)
    }
}

  return (
    <PokemonContainer color={getColors(pokemonType)}>
      <div>
        <PokemonId>#{pokemon.id}</PokemonId>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>
          <PokemonType src={getTypes(pokemonType)}/>
          {!pokemonType2.length < 1 && (
            <PokemonSecondType src={getTypes(pokemonType2)}/>
          )}
        </TypesContainer>
        <p onClick={() => goToDetailsPage(navigate, pokemon.name)}>Detalhes</p>
      </div>
      <div>
        <Pokemon src={pokemon.sprites?.other["official-artwork"].front_default}/>
        {location.pathname === "/" ? (
          <Button onClick={() => addToPokedex(pokemon)}>Capturar!</Button>
        ) : ( 
        <Button onClick={() => removeFromPokedex(pokemon)}>Excluir</Button>
        )}
      </div>
      <Pokeball src={pokeball} alt="pokeball"/>
    </PokemonContainer>
  );
};

export default Card;