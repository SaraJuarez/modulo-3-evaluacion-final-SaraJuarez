import React from 'react';


const CharacterCard = (props) => {

    return (
        <div className='wrap__character'>
            <img className='wrap__character--image' alt='Nombre del personaje' src={props.info.image}></img>
            <p className='wrap__character--name'>{props.info.name}</p>
            <p className='wrap__character--species'>{props.info.species}</p>
        </div>
    )
}

export default CharacterCard;

