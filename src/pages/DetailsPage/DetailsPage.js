import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { Main } from '../PokedexPage/styled';
import { CardContainer, Pokeball, PokeDetails, Pokemon, PokemonBack, PokemonFront, PokemonMoves, PokemonSprites, PokemonStats, PokemonType } from './styled';
import { BASE_URL } from '../../constants/url';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';
import pokeball from '../../assets/pokemon-wing.svg'

const DetailsPage = () => {
  const pathParams = useParams()

  const [ pokeDetails, setPokeDetails ] = useState({})

  const [pokemonType1, setPokemonType1] = useState({})

  const [pokemonType2, setPokemonType2] = useState({})

  useEffect(() => {
    getPokeDetails()
  }, [])

  const getPokeDetails = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/${pathParams.pokemonName}`);
      setPokeDetails(response.data)
      if(response.data.types[0]){
        setPokemonType1(response.data.types[0].type.name)
      } if (response.data.types[1]){
        setPokemonType2(response.data.types[1].type.name)
      }
    } catch(error) {
      console.log("Erro ao buscar lista de pokemons")
      console.log(error.response)
    }
  }


  return (
    <>
      <Header/>
      <Main>
      <Heading p="50px 30px" fontSize='48px' color="white">Detalhes</Heading>
      <CardContainer color={getColors(pokemonType1)}>
        <PokemonSprites>
          <PokemonFront><img src={pokeDetails.sprites?.front_default} alt={pokeDetails.name}/></PokemonFront>
          <PokemonBack><img src={pokeDetails.sprites?.back_default} alt={pokeDetails.name}/></PokemonBack>
        </PokemonSprites>
        <PokemonStats>
            <Heading color="black" p={"20px"}>Base Stats</Heading>
        </PokemonStats>
        <div className='pokemon-details'>
          <Heading fontSize='20px' color="white">#{pokeDetails.id}</Heading>
          <Heading fontSize='48px' color="white">{pokeDetails.name}</Heading>
          <div className='types-group'>
            <PokemonType src={getTypes(pokemonType1)}/>
            <PokemonType src={getTypes(pokemonType2)}/>
          </div>
          <PokemonMoves>
            <Heading color="black" fontSize='25px' p={"10px"}>Moves:</Heading>
          </PokemonMoves>
          <Pokemon src={pokeDetails.sprites?.other["official-artwork"].front_default}/>
        </div>
        <Pokeball src={pokeball} alt="pokeball"/>
      </CardContainer>
      </Main>
    </>
  )
}

export default DetailsPage;