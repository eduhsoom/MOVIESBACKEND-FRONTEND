import { Container } from './styles';

export function Button({title, icon: Icon, loading = false, dark = false, onClick, ...rest}){
    return(
        <Container
        type="button"
        disabled = {loading}
        dark = {dark}
        onClick={onClick}
        {...rest}
        >
            {Icon && <Icon size={20}/>}
            {loading ? "Carregando..." : title}
        </Container>
    )
}