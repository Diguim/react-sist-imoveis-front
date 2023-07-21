/* eslint-disable react/prop-types */
import {Container} from "./styles"

export default function Button( {props, children} ) {
    return(
        <Container {...props}>
            {children}
        </Container>
    )
}