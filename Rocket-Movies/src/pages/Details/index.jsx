import { Container, Content, Top } from "./styles";

import { FiArrowLeft, FiClock, FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from '../../components/Header';
import { ButtonText } from "../../components/ButtonText";
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tags'

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { toast } from "react-toastify";


export function Details() {
    const [data,setData] = useState({});

    const params = useParams();
    const navigate = useNavigate();

    const {user} = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleBack(){
        navigate(-1)
    }

    async function handleExcludeFilm(){
        const confirm = window.confirm(`Deseja excluir a nota do filme '${data.title}'?`);

        if(!confirm){
            return
        }

        await api.delete(`notes/${params.id}`);
        handleBack()
        toast.success("Filme excluído com sucesso")
    }

    useEffect(()=> {
        async function fetchNote(){
            const response = await api.get(`notes/${params.id}`)
            setData(response.data)
        }

        fetchNote();
    }, [])

    return(
        <Container>
            <Header/>
            <Content>
                <Top>
                    <div className="Buttons">
                    <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack}/>
                    <ButtonText title="Excluir" icon={FiTrash2} onClick={handleExcludeFilm}/>
                    </div>

                    <div className="Title">
                        <h1>{data.title}</h1>
                        <Stars rating={data.rating}/>
                    </div>
                    
                    <div className="Info">
                        <img src={avatarUrl} alt="Foto do Perfil" />
                        <p>Por {user.name}</p>
                        <FiClock/>
                        <p>{data.updated_at}</p>
                    </div>
                </Top>
                <div>
                {   data.tags &&
                    data.tags.map(tag => (
                        <Tag key={String(tag.id)}title={tag.name}/>
                    ))
                    
                    }
                </div>
                <p>{data.description}</p>
                
            </Content>
        </Container>
    );
}