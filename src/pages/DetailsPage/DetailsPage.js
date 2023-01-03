import { Heading, Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import { CardContainer, Main, Move, Pokeball, PokeballBackground, Pokemon, PokemonBack, PokemonFront, PokemonMoves, PokemonSprites, PokemonStats, PokemonType } from './styled';
import { BASE_URL } from '../../constants/url';
import { getTypes } from '../../utils/ReturnPokemonType';
import { getColors } from '../../utils/ReturnCardColor';
import pokeball from '../../assets/pokemon-wing.svg'

const DetailsPage = () => {
  const pathParams = useParams()

  const [pokeDetails, setPokeDetails] = useState({})

  const [pokemonType1, setPokemonType1] = useState({})

  const [pokemonType2, setPokemonType2] = useState({})

  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [spAtk, setSpAtk] = useState("");
  const [spDef, setSpDef] = useState("");
  const [speed, setSpeed] = useState("");
  const [moves, setMoves] = useState([])

  useEffect(() => {
    getPokeDetails()
  }, [])

  const getPokeDetails = async () => {
    try{
      const response = await axios.get(`${BASE_URL}/${pathParams.pokemonName}`);
      setPokeDetails(response.data)
      setHp(response.data.stats[0].base_stat);
      setAttack(response.data.stats[1].base_stat);
      setDefense(response.data.stats[2].base_stat);
      setSpAtk(response.data.stats[3].base_stat);
      setSpDef(response.data.stats[4].base_stat);
      setSpeed(response.data.stats[5].base_stat);
      setMoves(response.data.moves)
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
    
  console.log(moves)

  return (
    <>
      <Header/>
      <Main>
      <PokeballBackground src={pokeball} alt="pokeball"/>
      <Heading p="50px 30px" fontSize='48px' color="white">Detalhes</Heading>
      <CardContainer color={getColors(pokemonType1)}>
        <PokemonSprites>
          <PokemonFront><img src={pokeDetails.sprites?.front_default} alt={pokeDetails.name}/></PokemonFront>
          <PokemonBack><img src={pokeDetails.sprites?.back_default} alt={pokeDetails.name}/></PokemonBack>
        </PokemonSprites>
        <PokemonStats>
          <Heading color="black" p={"20px"}>Base Stats</Heading>
          <div className='pokestats'>
            <ul className='name-stat'>
                <li>HP</li>
                <li>Attack</li>
                <li>Defense</li>
                <li>Sp. Atk</li>
                <li>Sp. Def</li>
                <li>Speed</li>
                <li>Total</li>
              </ul>
            <ul>
              <li>{hp}</li>
              <li>{attack}</li>
              <li>{defense}</li>
              <li>{spAtk}</li>
              <li>{spDef}</li>
              <li>{speed}</li>
              <li>{hp + speed + defense + spAtk + spDef + speed}</li>
            </ul>
            <ul className='progress-bar'>
              <li><Progress colorScheme={"orange"} value={hp} size="md" width={"180px"} borderRadius="4px"/></li>
              <li><Progress colorScheme={"orange"} value={attack} size="md" width={"180px"} borderRadius="4px"/></li>
              <li><Progress colorScheme={"orange"} value={defense} size="md" width={"180px"} borderRadius="4px"/></li>
              <li><Progress colorScheme={"yellow"} value={spAtk} size="md" width={"180px"} borderRadius="4px"/></li>
              <li><Progress colorScheme={"yellow"} value={spDef} size="md" width={"180px"} borderRadius="4px"/></li>
              <li><Progress colorScheme={"orange"} value={speed} size="md" width={"180px"} borderRadius="4px"/></li>
            </ul>
          </div>
        </PokemonStats>
        <div className='pokemon-details'>
          <Heading fontSize='20px' color="white">#{pokeDetails.id}</Heading>
          <Heading fontSize='48px' color="white">{pokeDetails.name}</Heading>
          <div className='types-group'>
            <PokemonType src={getTypes(pokemonType1)}/>
            <PokemonType src={getTypes(pokemonType2)}/>
          </div>
          <PokemonMoves>
            <Heading color="black" fontSize='25px'>Moves:</Heading>
              {moves
              .filter((move, index) => {
                return index < 4
              })
              .map((item) => {
                return (
                  <Move key={item.move.name}>{item.move.name}</Move>
              )
              })}
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