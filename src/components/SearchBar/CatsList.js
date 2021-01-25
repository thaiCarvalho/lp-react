import React from 'react';
import Cat from './Cat';

const CatsList = ({ list }) => {
  return(
    <div className="header-result">
      <p>Resultado da busca:</p>
      {list.map(res => {
        return (
          <Cat key={res.id} list={res} />
        )
      })}
    </div>
  )
}

export default CatsList