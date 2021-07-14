import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../constants/colors"

export const Title = styled.h2`
    letter-spacing: 2px;
    margin-left: 20px;
    :hover {
        cursor:pointer;
    }
`
export const Header = styled.header`
    width: 100%;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const DivDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const Image = styled.img`
    width: 60%;
    height: 55%;
`

export const DivButton = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px;
`
export const DivInfos = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`
export const Colection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`
export const Tags = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`