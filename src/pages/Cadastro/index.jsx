import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Cadastro(){


    return(
        <Container>
            <h2>Crie sua conta</h2>
            <p>Cadastra-se apenas com nome, e-mail e senha</p>
            <ContainerForm>
                <Form action="">
                    <div>
                        <Label>Nome</Label>
                        <Input id="name-register" type="text" placeholder="Nome"/>
                    </div>
                    <div>
                        <Label>E-mail</Label>
                        <Input id="email-login" type="email" placeholder="E-mail"/>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input id="pass-login" type="password" placeholder="Senha"/>
                    </div>
                    <Button>Cadastrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}