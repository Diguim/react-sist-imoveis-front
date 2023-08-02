
import { Link } from "react-router-dom";
import { Container, Logo, Menu } from "./styles";


export default function Header(){
    const userLogged = localStorage.getItem('TesteKey');

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    
    return (
        <Container>
            <Logo>
                <Link to='/'>
                    <img src="" alt="IMG LOGO" />
                </Link>
            </Logo>
            <Menu>
                <ul>
                    {!userLogged ? 
                        (<li>
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
                        </li>) : (
                        <li><Link onClick={handleLogout}><span>Sair</span></Link></li>
                        )
                    }
                </ul>
            </Menu>
        </Container>
    )
}