import React, { useContext } from 'react'
import { HeaderContainer, HeaderDetails, HeaderPokedex } from './style'
import Logo from '../../assets/pokemon-logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHomePage, goToPokedexPage } from '../../Router/coordinator'
import { Button, Link } from '@chakra-ui/react'
import { GlobalContext } from '../../context/GlobalContext'

function Header() {
    const navigate = useNavigate()

    const location = useLocation()

    const context = useContext(GlobalContext)

    const { pokedex, removeFromPokedex } = context

    const renderHeader = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <HeaderContainer>
                        <Button w="287px" h="74px" bg='blue.400' borderRadius='8px' onClick={() => goToPokedexPage(navigate)}>
                            Pokédex
                        </Button>
                        <img src={Logo} alt="Pokemon Logo" />
                    </HeaderContainer>
                );
            case "/pokedex":
                return (
                    <HeaderPokedex>
                        <Link onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={Logo} alt="Pokemon Logo" />
                    </HeaderPokedex>
                );
            default:
                return (
                    <HeaderDetails>
                        <Link onClick={() => goToHomePage(navigate)}>Todos Pokémons</Link>
                        <img src={Logo} alt="Pokemon Logo" />
                        <Button w="226px" h="57px" bg='red.400' borderRadius='8px' onClick={() => removeFromPokedex(pokedex)}>
                            Excluir do Pokédex
                        </Button>
                    </HeaderDetails>
                )
        }
    }

    return (
        <>
            {renderHeader()}
        </>
    )
}

export default Header