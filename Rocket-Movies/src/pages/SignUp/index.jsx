import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {FiMail, FiLock, FiUser, FiArrowLeft} from "react-icons/fi"

import { api } from "../../services/api";

import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";


export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignUp(){
        if(!name || !email || !password){
         toast.warn("Preencha todos os campos!")
         return
        }

        await api.post("/users", {name, email, password})
        .then(() => {
            toast.success("Usuário cadastrado com sucesso!")
            navigate(-1)
        }).catch(error => {
            if(error.response){
                toast.error(error.response.data.message)
            }else{
                toast.error("Não foi possível cadastrar");
            }
        });
        
    }
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={e => setName(e.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />
                
                <Button title="Cadastre-se" onClick={handleSignUp}/>
                
                <ButtonText link="/" icon={FiArrowLeft} title="Voltar para o login" />
                
            </Form>
            <Background/>
        </Container>
    )
}