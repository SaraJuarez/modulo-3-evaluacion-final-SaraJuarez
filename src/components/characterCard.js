import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
    return (
        <Link className='link' to={`/CharacterDetail/` + props.info.id}>
            <div className='wrap__character'>
                <img className='wrap__character--image' title={props.info.name} alt={`imagen de + ${props.info.name}`} src={props.info.image}></img>
                <p className='wrap__character--name'>{props.info.name}</p>
                <p className='wrap__character--species'>{props.info.species}</p>
            </div>
        </Link>
    )
}

CharacterCard.propTypes = {
    info: PropTypes.object,
}

export default CharacterCard;

