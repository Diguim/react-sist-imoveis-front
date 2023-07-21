
import { Link } from "react-router-dom";
import { Container, Logo, Menu } from "./styles";


export default function Header(){
    
    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="" />
                </Link>
            </Logo>
            <Menu>
                <ul>
                    <Link to='/cadastro'>
                        <li>
                            <span>Cadastro</span>
                        </li>
                    </Link>
                    <Link to='/login'>
                        <li>
                            <span>Login</span>
                        </li>
                    </Link>
                    
                </ul>
            </Menu>
        </Container>
    )
}