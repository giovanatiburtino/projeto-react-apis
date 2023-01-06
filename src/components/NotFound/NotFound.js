import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { NotFoundCard, NotFoundContainer } from './style'

const NotFound = ({setNotFound}) => {
  return (
    <NotFoundContainer onClick={() => setNotFound(false)}>
        <NotFoundCard>
            <Heading fontSize="40px">Pokémon not found</Heading>
            <Text fontWeight="700">Este pokémon não está na sua Pokedéx</Text>
        </NotFoundCard>
    </NotFoundContainer>
  )
}

export default NotFound