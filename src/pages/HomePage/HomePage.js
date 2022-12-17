import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../context/GlobalContext';
import { CardsContainer, Main } from '../HomePage/styled'

const HomePage = () => {
  const context = useContext(GlobalContext)

  const { pokedex, pokelist, addToPokedex  } = context

  const filteredPokelist = () =>
    pokelist.filter((pokemonInList) => !pokedex.find((pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name)
  );

  return (
    <>
        <Header/>
        <Main>
          <Heading p="30px" color="white">Todos Pokémons</Heading>
          <CardsContainer>
            {filteredPokelist().map((pokemon) => {
              return (
                <Card
                  key={pokemon.url}
                  pokemonUrl={pokemon.url}
                  addToPokedex={addToPokedex}
                />
              );
            })}
          </CardsContainer>
        </Main>
    </>
  )
}

export default HomePage;