import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function Login(){

    return (
        <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com E-mail e Senha</p>
            <ContainerForm>
                <Form action="">
                    <div>
                        <Label>E-mail</Label>
                        <Input id="email-login" type="email" placeholder="E-mail"/>
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input id="pass-login" type="password" placeholder="Senha"/>
                    </div>
                    <Button>Entrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}