import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
    return (
        <div className='filter-box'>
            <img className='filter-box__logo' title='Logo' alt='Logo Rick and Morty' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'></img>
            <form onSubmit={props.defaultFunction}>
                <input value={props.lastSearch} onChange={props.inputFunction} className='filter-box__input'></input>
            </form>

        </div >
    )
}


Filter.propTypes = {
    defaultFunction: PropTypes.func,
    inputFunction: PropTypes.func,
    lastSearch: PropTypes.string
}

export default Filter;