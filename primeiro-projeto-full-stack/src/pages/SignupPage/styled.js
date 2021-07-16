import styled from "styled-components"
import { primaryColor, secondaryColor } from "../../constants/colors"

export const Title = styled.h2`
    letter-spacing: 2px;
    margin-left: 20px;
    font-family: roboto;
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

export const SignUpTitle = styled.h1`
    color: ${primaryColor};
    display: flex;
    justify-content: center;
    padding: 10px;
    letter-spacing: 2px;
    font-family: roboto;
`

export const InitialForm = styled.form`
    width: 70%;
    height: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: 20px;
`
export const DivButton = styled.div`
    margin-right: 20px;
    display: flex;
    gap: 10px;
`