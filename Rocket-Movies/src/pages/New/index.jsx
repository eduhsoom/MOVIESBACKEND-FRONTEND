import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi'

import { Container, Form, Section } from "./styles";

import { api } from "../../services/api";

import {Header} from '../../components/Header';
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText';
import {Input} from '../../components/Input';
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";



export function New(){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState();
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();


    function handleBack(){
        navigate(-1);
    }
    function handleConfirm(){
        const confirmRemove = window.confirm("Deseja sair sem salvar nenhuma alteração?")

        confirmRemove ? handleBack() : null;
    }
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("");
    }

    function handleRemoveTag(deleted){
        setTags(prevState => [...prevState.filter(tag => tag !== deleted)])
    }

    async function handleAddMovie(){
        
            if(!title){
                return toast.warn("É preciso adicionar um título para cadastrar um filme!");
            }
            if(!rating){
                return toast.warn("É preciso adicionar uma nota para cadastrar um filme!");
            }
            if(!description){
                const confirm = window.confirm("Deseja cadastrar o filme sem descrição?");

                if(!confirm){
                    return
                }
            }
            if(newTag){
                return toast.warn(`Marcador: ${newTag} não foi adicionado, adicione apertando o botão "+" ou exclua para prosseguir`);
            }
        try{
            await api.post("/notes", {
                title,
                rating,
                description,
                tags
            }).then(()=>{
                toast.success("Nota adicionada!");
                handleBack();
            })
        }catch(error){
            error.response ? error.response.data.message : "Não foi possível cadastrar este filme :("
        }
    
        
    }
    return(
        <Container>
            <Header/>
            <Form>
                <ButtonText icon={FiArrowLeft} title="Voltar" link={-1}/>
                <h1>Novo filme</h1>

                <div className="Wrapper">
                    <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
                    <Input placeholder="Sua nota (de 0 a 5)" type="number" onChange={e => setRating(e.target.value)} min="0" max="5"/>
                </div>

                <Textarea placeholder="Observação" onChange={e => setDescription(e.target.value)}/>

                <Section>
                    <h2>Marcadores</h2>

                    <div>
                        { tags &&
                            tags.map((tag, index) => (
                                <NoteItem key={String(index)}value={tag} onClick={()=>handleRemoveTag(tag)}/>   
                            ))
                            }
                        
                        <NoteItem placeholder='Novo marcador' 
                        isNew 
                        value={newTag}
                        onChange={e => setNewTag(e.target.value)} 
                        onClick={handleAddTag}
                        />
                    </div>
                </Section>

                <div className="Wrapper">
                    <Button title='Excluir filme' dark onClick={handleConfirm}/>
                    <Button title='Salvar alterações' onClick={handleAddMovie}/>
                </div>
            </Form>
        </Container>
    );
}