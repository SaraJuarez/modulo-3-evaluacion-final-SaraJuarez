import React from 'react';
import CharacterCard from './characterCard';
import PropTypes from 'prop-types';



const CharacterList = (props) => {
    let charactersListHtml = props.characters.map((character, index) =>
        <CharacterCard key={index} info={character} />
    )

    return (

        <div className='wrap'>
            {charactersListHtml}
        </div>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.array,
}


export default CharacterList;