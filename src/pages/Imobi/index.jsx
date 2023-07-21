import { Fragment } from "react"
import TopBanner from "../../components/TopBanner"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles"

export default function Imobi(){

    return (
        <Fragment>
            <TopBanner />
            <Container>
                <Left>
                    <Thumb>
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="" />
                    </Thumb>
                    <Description>
                        <h2>Apartamento / Alugar</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, adipisci. Dolore inventore amet qui repudiandae officiis minus eius ea ullam! Perspiciatis eligendi qui quod at sed quae? Nihil, repellendus. Laudantium?</p>

                    </Description>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80" alt="" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>Nome do perfil</h3>
                            <p>Endereço</p>
                            
                        </ProfileDescription>
                    </Profile>
                        <ProfileContact>
                            <h3>Informações para contato</h3>
                            <p>(xx) xxxx-xxxx</p>
                            <p>email@email.com</p>
                        </ProfileContact>
                        <ProfileFormContact>
                            <h3>Contate o anunciante</h3>
                            <form>
                                <input type="text" name="" id="" placeholder="Nome"/>
                                <input type="email" name="" id="" placeholder="email@email.com"/>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Escreve a mensagem"></textarea>
                                <button type="submit">Enviar mensagem</button>
                            </form>
                        </ProfileFormContact>
                </Right>
            </Container>
        </Fragment>
    )
}