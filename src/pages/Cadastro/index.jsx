import { useState } from "react";
import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Api from "../../services/Api"
import { toast } from "react-toastify";

export default function Cadastro(){
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const InputValue = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Api.post('/creatusers', data)
            .then((response) => {
                console.log(response);
                if(!response.data.error === true){
                    toast(response.data.message);
                }else{
                    toast(response.data.message);
                }
            })
            .catch(() => {
                console.log("Erro: Erro no sistema - API ERROR");
            });


        // console.log(data);
    }

    return(
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastra-se apenas com nome, e-mail e senha</p>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Label>Nome</Label>
                        <Input 
                            id="name" 
                            name="name"
                            type="text" 
                            placeholder="Nome"
                            onChange={InputValue} 
                        />
                    </div>
                    <div>
                        <Label>E-mail</Label>
                        <Input id="email" name="email" type="email" placeholder="E-mail" onChange={InputValue}/>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input id="password" name="password" type="password" placeholder="Senha" onChange={InputValue}/>
                    </div>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}