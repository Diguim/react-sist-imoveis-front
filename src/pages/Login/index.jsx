import { useState } from "react";
import { Container, ContainerForm, Form, Label } from "./styles";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { AppAuth } from "../../context/AppAuth";

export default function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const auth = AppAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        await auth.authenticate(email, password);
    }

    return (
        <Container>
            <h2>Acesse sua conta</h2>
            <p>Entre com E-mail e Senha</p>
            <ContainerForm>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <Label>E-mail</Label>
                        <Input 
                            name="email" 
                            type="email" 
                            placeholder="E-mail" 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <Label>Senha</Label>
                        <Input 
                            name="password" 
                            type="password" 
                            placeholder="Senha" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <Button type="submit">Entrar</Button>
                </Form>
            </ContainerForm>
        </Container>
    )
}