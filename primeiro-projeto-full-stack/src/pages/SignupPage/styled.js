import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const Title = styled.h2`
color: ${primaryColor};
display: flex;
justify-content: center;
padding: 10px;
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