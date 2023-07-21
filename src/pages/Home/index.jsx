import Banner from "../../components/Banner";
import Card from "../../components/Card";
import {Wrapper} from "./styles";


export default function Home(){
    let Cards = [];
    for(let i = 0; i < 4; i++){
        Cards.push(<Card key={i}/>)
    }
    
    return (
        <div>
            <Banner/>
            <Wrapper>
                {Cards}
            </Wrapper>
        </div>
    )
}