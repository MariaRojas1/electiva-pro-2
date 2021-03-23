import React from 'react';

const BotonArchivos = (props) => {
    const { titulo, urlDescarga } = props;
    return (
        <a class="button is-black" href={urlDescarga} target="_blank" rel="noopener">{titulo}</a>
    )
}

export default BotonArchivos;