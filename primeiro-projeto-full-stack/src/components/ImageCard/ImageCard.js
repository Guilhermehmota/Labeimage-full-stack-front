import React from "react";
import { Main, Image, ImageTitle, DivTitle } from "./styled";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { goToImageDetailsPage } from "../../routes/coordinator";

const ImageCard = (props) => {

    const history = useHistory()

    return (
        <Main>
            <Image src={props.image}/>
            <DivTitle>
            <ImageTitle>{props.subtitle}</ImageTitle>
            </DivTitle>
            <Button type="submit" variant="contained" color="primary" onClick={() => goToImageDetailsPage(history, props.id)}> Ver detalhes </Button>
        </Main>
    )
}

export default ImageCard
