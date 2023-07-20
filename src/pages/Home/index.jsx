import Card from "../../components/Card";
import { Header, Wrapper } from "./styles";


export default function Home(){
    let Cards = [];
    for(let i = 0; i < 4; i++){
        Cards.push(<Card key={i}/>)
    }
    
    return (
        <div>
            <Header>
                <h2>Titulo h2 do header do div do HOME</h2>
            </Header>
            <Wrapper>
                {Cards}
            </Wrapper>
        </div>
    )
}