import {Container, Item, Copy} from './styles'
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer(){

    return (
        <div>
            <Container>
                <Item>
                    <img src="" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae quis quaerat id saepe quasi odio sint excepturi, blanditiis repellendus aspernatur nostrum a.</p>
                    <nav>
                        <li><span><FaFacebook size={32}/> </span></li>
                        <li><span><FaInstagram size={32}/> </span></li>
                        <li><span><FaWhatsapp size={32}/> </span></li>
                    </nav>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>alugar</span></li>
                        <li><span>vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>alugar</span></li>
                        <li><span>vender</span></li>
                    </ul>
                </Item>
                <Item>
                    <h3>Our Services</h3>
                    <ul>
                        <li><span>Comprar</span></li>
                        <li><span>alugar</span></li>
                        <li><span>vender</span></li>
                    </ul>
                </Item>
            </Container>
            <Copy>
                <p>© Copyright 2023 - Workside Tecnologia All Rights Reserved.</p>
                <ul>
                    <li><span>Termos de Uso</span></li>
                    <li><span>Política de Privacidade</span></li>
                    <li><span>Política de Cookies</span></li>
                </ul>
            </Copy>
        </div>
    )
}