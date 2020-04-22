import React from 'react';



const Filter = (props) => {

    return (

        <div className='filter-box'>
            <img className='filter-box__logo' title='Logo' alt='Logo Rick and Morty' src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'></img>
            <form>
                <input onChange={props.inputFunction} className='filter-box__input'></input>
            </form>

        </div >
    )
}


export default Filter;