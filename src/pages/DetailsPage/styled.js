import styled from "styled-components";

export const CardContainer = styled.div`
    width: 95vw;
    margin: 0px 30px;
    height: 663px;
    background-color: ${(props) => props.color};
    border-radius: 37.8857px;
    display: flex;

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
`

export const PokemonFront = styled.div`
    width: 282px;
    height: 282px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
`

export const PokemonBack = styled.div`
    width: 282px;
    height: 282px;
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: center;
`

export const PokemonStats = styled.div`
    width: 343px;
    height: 613px;
    background-color: #FFFFFF;
    border-radius: 12px;
    margin-top: 30px;
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
    z-index: 2;
`

export const Pokemon = styled.img`
  width: 270px;
  height: 270px;
  position: absolute;
  left: 1180px;
  top: 190px;
`;

export const Pokeball = styled.img`
  position: absolute;
  left: 650px;
  top: 210px;
  width: 865px;
  z-index: 1;
`;