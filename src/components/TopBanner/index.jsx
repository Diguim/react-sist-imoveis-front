/* eslint-disable react/prop-types */
import { urlApi } from "../../services/Api"
import { Container, Text } from "./styles"

export default function TopBanner({ tipo, descricao, thumb }){
    const imgUrl = `${urlApi}/uploads/${thumb}`
    return (
        <Container style={{backgroundImage: `url(${imgUrl});`}}>
            <Text>
                <h2>{tipo}</h2>
                <p>{descricao}</p>
            </Text>
        </Container>
    )
}