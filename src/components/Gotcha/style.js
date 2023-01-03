import styled from "styled-components";

export const GotchaCard = styled.div`
    width: 451px;
    height: 222px;
    background: #FFFFFF;
    color: #000000;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const GotchaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.5);
`;