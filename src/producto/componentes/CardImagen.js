import React from 'react';
import './CardImagen.css'

const  CardImagen = (props)=>{
    const { imagen, titulo } = props;
    return(
        <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={imagen} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{titulo}</p>
      </div>
    </div>


  </div>
</div>
    )
}

export default CardImagen;