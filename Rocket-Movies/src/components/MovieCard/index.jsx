import { Container } from "./styles";

import { Stars } from "../Stars";
import { Tag } from "../Tags";

export function MovieCard({data, ...rest}){
    return( 
    <Container {...rest}> 
        <div>
        <h1>{data.title}</h1>
        <Stars rating={data.rating}/>
        </div>

        <p>{data.description}</p>

        {
            data.tags &&
            <footer>
               { data.tags.map(tag => <Tag title={tag.name} key = {tag.id}/>)}
            </footer>
        }
    </Container>
    );
}