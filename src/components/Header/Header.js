import React from 'react'
import { HeaderContainer } from './style'
import Logo from '../../assets/pokemon-logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokedexPage } from '../../Router/coordinator'
import { Button, Link } from '@chakra-ui/react'

function Header() {
    const navigate = useNavigate()

    const location = useLocation()

    const renderHeader = () => {
        switch (location.pathname){
            case "/":
                return (
                    <>
                        <Button w="287px" h="74px" bg='blue.400' borderRadius='8px' onClick={() => goToPokedexPage(navigate)}>
                            Pokédex
                        </Button>
                    </>
                );
            case"/pokedex":
                    return (
                        <>
                            <Link onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        </>
                );
            default:
                return(
                <>
                    <Button w="287px" h="74px" bg='red.400' borderRadius='8px' onClick={() => goToHomePage(navigate)}>
                        Excluir do Pokédex
                    </Button>   
                </>
                )
        }
    }

    return (
        <HeaderContainer>
            <img src={Logo} alt="Pokemon Logo" />
            {renderHeader()}
        </HeaderContainer>
    )
}

export default Header