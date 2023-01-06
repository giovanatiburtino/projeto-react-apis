import React, { useContext } from 'react'
import { HeaderContainer, HeaderDetails, HeaderPokedex } from './style'
import Logo from '../../assets/pokemon-logo.svg'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { goToHomePage, goToPokedexPage } from '../../Router/coordinator'
import { Button, Link } from '@chakra-ui/react'
import { GlobalContext } from '../../context/GlobalContext'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

function Header(props) {
    const navigate = useNavigate()

    const location = useLocation()

    const context = useContext(GlobalContext)

    const { pokeDetails } = props

    const { anotherRemoveFromPokedex } = context

    const pathParams = useParams()

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
                        <Link onClick={() => goToHomePage(navigate)}> &lt; Todos Pokémons</Link>
                        <img src={Logo} alt="Pokemon Logo" />
                    </HeaderPokedex>
                );
            case (`/details/${pathParams.pokemonName}`):
                return (
                    <HeaderDetails>
                        <Link onClick={() => goToHomePage(navigate)}> &lt; Todos Pokémons</Link>
                        <img src={Logo} alt="Pokemon Logo" />
                        <Button w="226px" h="57px" bg='red.400' borderRadius='8px' onClick={() => anotherRemoveFromPokedex(pokeDetails)}>
                            Excluir do Pokédex
                        </Button>
                    </HeaderDetails>
                );
            default:
                return (
                    <NotFoundPage>
                        Página não encontrada
                    </NotFoundPage>
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