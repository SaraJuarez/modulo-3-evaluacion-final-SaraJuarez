import React from 'react';
import { Link } from "react-router-dom";
import miscellaneous from './miscellaneous.png';
import human from './mujer.png';
import PropTypes from 'prop-types';


const CharacterDetail = (props) => {
    let characterDetail =
        props.characters.find(character => character.id === parseInt(props.match.params.id))

    return (
        <div className='card-box'>
            <img className='card-box__logo' title='Logo' alt='Logo Rick and Morty' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'></img>
            <Link className='card-box__link-return' to={`/`}> > Volver</Link>

            <div className='card-box__infoCharacter'>
                <div >
                    <img title={characterDetail.name} alt={`imagen de + ${characterDetail.name}`} src={characterDetail.image} className='detail-image' ></img>
                </div>
                <div className='card-box__infoCharacter--text'>
                    <p>Nombre: {characterDetail.name} <i className={characterDetail.alive === 'Alive' ? 'fas fa-heartbeat' : 'fas fa-skull-crossbones'}></i></p>
                    <p >Especie: <img className='woman' src={characterDetail.species === 'Human' ? human : miscellaneous}></img></p>
                    <p>Origen: {characterDetail.planet}</p>
                    <p>Episodios: {characterDetail.episodes}</p>


                </div>
            </div>



        </div>
    )
}

CharacterDetail.propTypes = {
    characters: PropTypes.array,
    match: PropTypes.object,

}


export default CharacterDetail;