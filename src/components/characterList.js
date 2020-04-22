import React from 'react';
import CharacterCard from './characterCard';



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


export default CharacterList;