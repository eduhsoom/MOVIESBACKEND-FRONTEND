import { Container, Content, LinkButton, Menu } from "./styles";

import { api } from "../../services/api";

import {FiPlus} from 'react-icons/fi'

import { Header } from "../../components/Header";


import { MovieCard } from "../../components/MovieCard";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export function Home(){
    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([]);

    const navigate = useNavigate();
    
    function handleDetails(id){
        navigate(`details/${id}`)
    }
    
    useEffect(()=> {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}`);
            setNotes(response.data)
        }

        fetchNotes();
    }, [search])
    return(
        <Container>
            <Header onChange={e => setSearch(e.target.value)}/>
            <Content>
                <div>
                    <h1>Meus filmes</h1> 
                    <LinkButton to="/new"> <FiPlus/> Adicionar filme</LinkButton>
                </div>  

                <Menu>
                    {
                        notes && 
                        notes.map(note => (
                            <MovieCard
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }
                   
                </Menu> 
            </Content>

        </Container>
    );
}