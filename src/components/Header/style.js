import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 160px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 113px;
    }

    button{
        position: absolute;
        right: 0;
        margin: 4px 10px;
        color: white;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
    }

    a{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-decoration-line: underline;
    }
`