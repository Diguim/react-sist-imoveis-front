
import { Container, Logo, Menu } from "./styles";


export default function Header(){
    
    return (
        <Container>
            <Logo>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="" />
            </Logo>
            <Menu>
                <ul>
                    <li><span>Cadastro/Login</span></li>
                    
                </ul>
            </Menu>
        </Container>
    )
}