import React from 'react'
import {Container, Section} from 'react-bulma-components'

const header = ({title})=>{

    return(
        <Section>
            <Container>
                <h1 className="title has-text-centered" >{title}</h1>                 
            </Container>
        </Section>
    )
}

export default header