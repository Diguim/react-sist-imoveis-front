import styled from "styled-components"

export const Container = styled.div`
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    width: 70%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
`
export const Thumb = styled.div`
    max-width: 720px;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;

    }
`
export const Description = styled.div`
    padding: 30px 0;
    h2, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`
export const Right = styled.div`
    width: 28%;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
`
export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`
export const ProfileImg = styled.div`
    width: 115px;
    img{
        width: 100%;
        height: auto;
        border-radius: 5px;
    }
`
export const ProfileDescription = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`
export const ProfileContact = styled.div`
    h3, p{
        margin-bottom: 15px;
        color: var(--secondary);
    }
`
export const ProfileFormContact = styled.div`
    h3{
        margin-bottom: 15px;
        color: var(--secundary);
    }
    form{
        input{
            height: 50px;
            padding: 8px 5px;
            border-radius: 3px;
            width: 100%;
            color: var(--secundary);
            letter-spacing: 0.1px;
            font-size: .938rem;
            margin-bottom: 10px;
            border: 1px solid var(--gray);
        }
        textarea{
            margin: .5rem 0;
            resize: none;
            width: 100%;
            border: 1px solid var(--gray);
        }
        button{
            border: 1px solid var(--gray);
            border-radius: 10px;
            padding: 10px;
            font-size: 1.2rem;
            font-weight: 300;
            &:hover{
                background-color: var(--gray);
                cursor: pointer;
            }
        }
        display: flex;
        flex-direction: column;
        
    }
`


