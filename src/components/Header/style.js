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
`

export const HeaderPokedex = styled.header`
    height: 160px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    align-items: center;

    a{
        margin-left: 100px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-decoration-line: underline;
    }

    img{
        margin-left: 316px;
    }
`

export const HeaderDetails = styled.header`
    height: 160px;
    width: 100%;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        margin-left: 100px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        text-decoration-line: underline;
    }

    button{
        margin: 4px 10px;
        color: white;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`