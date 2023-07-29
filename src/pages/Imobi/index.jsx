import { Fragment, useEffect, useState } from "react"
import TopBanner from "../../components/TopBanner"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import Api, { urlApi } from "../../services/Api"
import { useParams } from "react-router-dom"

export default function Imobi(){

    const { slug } = useParams();
    const [dataImobi, setDataImobi] = useState([]);

    useEffect(() => {

        Api.get(`/listimobi/${slug}`)
        .then((response) => { 
            setDataImobi(response.data)
         })
        .catch(() => { 
            console.log("Erro ao captar imóvel");
        })
    }, [])

    const {
        tipo,
        cidade,
        endereco,
        descricao,
        thumb,
        email,
        name,
        telefone

    } = dataImobi;

    return (
        <Fragment>
            <TopBanner
                tipo={tipo} 
                descricao={descricao}
                thumb={thumb}
            />
            <Container>
                <Left>
                    <Thumb>
                        <img src={`${urlApi}/uploads/${thumb}`} alt="" />
                    </Thumb>
                    <Description>
                        <h2>{tipo}</h2>
                        <p>{`Endereço: ${endereco}, ${cidade}`}</p>
                        <p>{descricao}</p>

                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img src="" alt="FOTO DE PERFIL DO USUÁRIO" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>{name}</h3>
                        </ProfileDescription>
                    </Profile>
                        <ProfileContact>
                            <h3>Informações para contato</h3>
                            <p>{telefone}</p>
                            <p>{email}</p>
                        </ProfileContact>
                        <ProfileFormContact>
                            <h3>Contate o anunciante</h3>
                            <form>
                                <Input type="text" placeholder="Nome"  />
                                <Input type="email" placeholder="email@email.com"/>
                                <TextArea cols="30" rows="10" placeholder="Escreva a mensagem"/>
                                <Button>Enviar Mensagem</Button>
                               
                            </form>
                        </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}