import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import {Wrapper} from "./styles";
import Api from "../../services/Api"


export default function Home(){
    const [imobi, setImobi] = useState([]);

    useEffect(() => {
        Api.get("/listimobi")
        .then((response) => {
            setImobi(response.data);
            console.log(response.data)
            
        })
        .catch(() => {
            console.log("erro na api da home");
        })
    }, [])
    
    return (
        <div>
            <Banner/>
            <Wrapper>
                {
                    imobi.map(items => (
                        
                        <Card 
                            key={items.id}
                            thumb={items.thumb}
                            tipo={items.tipo}
                            endereco={items.endereco}
                            valor={items.valor}
                            slug={items.slug}
                        />
                    ))
                }
            </Wrapper>
        </div>
    )
}