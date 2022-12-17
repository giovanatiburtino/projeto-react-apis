import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header'
import { BASE_URL } from '../../constants/url';
import { GlobalContext } from '../../context/GlobalContext';
import { CardsContainer, Main } from './styled';

const PokedexPage = () => {
  const context = useContext(GlobalContext)

  const { pokedex, removeFromPokedex } = context

  return (
    <>
      <Header />
      <Main>
        <Heading p="30px" color="white">Meus Pokémons</Heading>
        <CardsContainer>
          {pokedex.map((pokemon) => {
           return <Card key={pokemon.name} pokemonUrl={`${BASE_URL}/${pokemon.name}`} removeFromPokedex={removeFromPokedex} />
          })}
        </CardsContainer>
      </Main>
    </>
  )
}

export default PokedexPage;