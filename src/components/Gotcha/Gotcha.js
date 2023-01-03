import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { GotchaCard, GotchaContainer } from './style'

const Gotcha = ({setGotcha}) => {
  return (
    <GotchaContainer onClick={()=> setGotcha(false)}>
      <GotchaCard>
        <Heading fontSize="48px">Gotcha!</Heading>
        <Text fontWeight="700">O Pokémon foi adicionado a sua Pokédex</Text>
      </GotchaCard>
    </GotchaContainer>
  )
}

export default Gotcha