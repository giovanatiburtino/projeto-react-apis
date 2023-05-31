import styled from "styled-components";

export const Main = styled.main`
    background: gray;
    min-height: 80vh;
    max-height: 100%;
    width: 100vw;
`

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
`