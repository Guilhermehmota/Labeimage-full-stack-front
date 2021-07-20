import { primaryColor, secondaryColor } from "../../constants/colors"
import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    background-color: ${secondaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const ErrorTitle = styled.h1`
    color: ${primaryColor};
    display: flex;
    justify-content: center;
    padding: 10px;
    letter-spacing: 2px;
    font-family: roboto;
    `

export const Title = styled.h2`
    letter-spacing: 2px;
    margin-left: 20px;
    font-family: roboto;
    :hover {
        cursor:pointer;
    }
`
export const DivButton = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px;
`