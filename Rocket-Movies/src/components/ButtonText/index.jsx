import { Container } from "./styles";

export function ButtonText ({link, title, icon: Icon, ...rest}){
return(
    <Container to={link} {...rest}>
    {Icon && <Icon size={20}/>}
    {title}
    </Container>
)
}