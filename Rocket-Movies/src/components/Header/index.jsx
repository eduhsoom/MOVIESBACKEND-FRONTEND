import { useNavigate } from 'react-router-dom';

import { Container, Profile, LinkTag } from './styles';

import { Input } from "../../components/Input";

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({onChange}){
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

   function handlesignOut(){
        navigate("/")
        signOut();
    }
    return(
    <Container>
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo titulo" onChange={onChange}/>
        <Profile>
                <div>
                    <LinkTag to="/profile">
                    <strong>{user.name}</strong>
                    </LinkTag>
                    <span onClick={handlesignOut}>Sair</span>
                </div>
                <LinkTag to="/profile">
                 <img 
                src={avatarUrl}
                alt="Foto do usuário"/>
                </LinkTag>
        </Profile>
    </Container>
)
}