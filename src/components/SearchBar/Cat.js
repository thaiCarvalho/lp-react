import React from 'react';

const Cat = ({list}) => {
  return(
    <div className='result-show'>
      <h2>{list.name}</h2>
      <div>{list.origin}</div>
      <div className="header-result--list">
        <img src={`https://cdn2.thecatapi.com/images/${list.reference_image_id}.jpg`} alt={list.name}></img>
      </div>
    </div>
  )
}

export default Cat;