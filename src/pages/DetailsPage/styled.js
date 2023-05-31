import { Heading } from "@chakra-ui/react";
import styled from "styled-components";

export const Main = styled.main`
    background-color: gray;
    min-height: 130vh;
    max-height: 150vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pokestats{
        display: flex;
    }

    ul{
        margin-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        list-style: none;
        font-weight: 500;
    }

    .name-stat{
        text-align: center;
        color: gray;
    }

    .progress-bar{
        display: flex;
        flex-direction: column;
        margin-top: 7px;
        gap: 12px;
    }
`

export const HeadingTag = styled(Heading)`
    font-size: 48px;
    color: white;
    top: 12.5rem;
    position: absolute;
    left: 2.5rem;
`

export const CardContainer = styled.div`
    width: 95vw;
    height: 663px;
    background-color: ${(props) => props.color};
    border-radius: 37.8857px;
    display: flex;
    position: absolute;
    z-index: 15;

    .pokemon-details{
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        padding-left: 100px;
        text-transform: capitalize;
    }

    .types-group{
        display: flex;
        padding-top: 10px;
    }
`

export const PokemonSprites = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 40px;
    padding: 30px 45px;
    z-index: 4;
`

export const PokemonFront = styled.div`
    width: 282px;
    height: 282px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    z-index: 4;
`

export const PokemonBack = styled.div`
    width: 282px;
    height: 282px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    z-index: 4;
`

export const PokemonStats = styled.div`
    width: 343px;
    height: 613px;
    background-color: #FFFFFF;
    border-radius: 12px;
    margin-top: 30px;
    z-index: 4;
`

export const PokemonType = styled.img`
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const PokemonMoves = styled.div`
    width: 292px;
    height: 453px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 3;
    padding: 10px;
`

export const Pokemon = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  right: 2rem;
  top: -8rem;
  z-index: 3;
`;

export const Pokeball = styled.img`
  position: absolute;
  right: -1rem;
  top: -120px;
  width: 900px;
  z-index: 2;
  overflow: hidden;
`;

export const Move = styled.div`
    min-width: 102px;
    max-width: 120px;
    height: 37px;
    border-radius: 12px;
    background: #ECECEC;
    border: 1px dashed rgba(0, 0, 0, 0.14);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const PokeballBackground = styled.img`
    position: absolute;
    top: 25px;
    width: 1000px;
    z-index: 1;
`