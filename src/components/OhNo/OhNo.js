import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { OhNoCard, OhNoContainer } from './style'

const OhNo = ({setOhNo}) => {
  return (
    <OhNoContainer onClick={() => setOhNo(false)}>
        <OhNoCard>
            <Heading fontSize="48px">Oh, no!</Heading>
            <Text fontWeight="700">O Pokémon foi removido da sua Pokedéx</Text>
        </OhNoCard>
    </OhNoContainer>
  )
}

export default OhNo