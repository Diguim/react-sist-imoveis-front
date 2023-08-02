import { Fragment, useEffect, useState } from "react"
import TopBanner from "../../components/TopBanner"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import Api, { urlApi } from "../../services/Api"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export default function Imobi(){

    const { id } = useParams();
    const [dataImobi, setDataImobi] = useState([]);

    useEffect(() => {

        Api.get(`/listImobi/${id}`)
        .then((response) => { 
            console.log(response)
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
        telefone,
        userId
    } = dataImobi;

    const [ client_name, setClientName] = useState('');
    const [ client_email, setClientEmail] = useState('');
    const [ client_mensagem, setClientMensagem] = useState('');

    
    const dataMessage = {
        client_name,
        client_email,
        client_mensagem,
        userId
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Api.post('/createmessage', dataMessage)
        .then((response) => {
            if(!response.data.erro === true){
                toast(response.data.message);
            }else{
                toast(response.data.message);
            }
        }).catch(() => {
            console.log("Deu erro no create message api");
        })
    }
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
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <Input type="hidden" name="userId" value={userId}/>
                                <Input type="text" name="client_name" placeholder="Nome" onChange={(e) => setClientName(e.target.value)} />
                                <Input type="email" name="client_email" placeholder="email@email.com" onChange={(e) => setClientEmail(e.target.value)} />
                                <TextArea cols="30" name="client_mensagem" rows="10" placeholder="Escreva a mensagem" onChange={(e) => setClientMensagem(e.target.value)} />
                                <Button type="submit">Enviar Mensagem</Button>
                               
                            </form>
                        </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}