import React from 'react';

const CatsList = ({ list }) => {

  return(
    <div className="header-result">
      <p>Resultado da busca:</p>
      {list.map(res => {
        return (
          <div className="header-result--list" key={res}>
            <div>{res.name}</div>
            <div>Origin: {res.origin}</div>
            <img src={res.image.url} alt={res.image.id}></img>
            {/* <Cats key={res} list={res} /> */}
            {console.log({res})}
          </div>
          
        )
      })}
    </div>
  )
}

export default CatsList