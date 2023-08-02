/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { urlApi } from "../../services/Api";

export default function Card({ thumb, tipo, endereco, valor, id }){

    return(
        <Container>
            <Img>
                <img src={`${urlApi}/uploads/${thumb}`} alt="" />
            </Img>
            <Description>
                <h4> {tipo} </h4>
                
                <Itens>
                    <span> <FaMapMarkerAlt /> {endereco} </span>
                    <span>R$ {valor} / mês</span>
                </Itens>
                <Link to={`/imovel/${id}`}>
                    Detalhes <FaArrowRight/>
                </Link>
            </Description>
        </Container>
    )
}