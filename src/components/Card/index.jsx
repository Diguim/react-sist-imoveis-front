import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa"

export default function Card(){

    return(
        <Container>
            <Img>
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="" />
            </Img>
            <Description>
                <h4> Apartamento / Cobertura </h4>
                <Itens>
                    <span> <FaMapMarkerAlt /> descricao do endereço</span>
                    <span>R$ 2400,00 / mês</span>
                </Itens>
                <a href="#"> Detalhes <FaArrowRight/> </a>
               
            </Description>
        </Container>
    )
}