import React from 'react' 
import lupa from '../../icons/search.svg'

const SearchBar = ({placeholder, handlechange, handleClick}) => {

  return (
    <form>
      <input 
        type="search"
        className="header-searchBox"
        placeholder={placeholder}
        onChange={handlechange}
        onClick={handleClick}
      />
      <img className="header-searchBox--svg" src={lupa} alt="search icon"/>
      <div className="header-searchBox--overlay"></div>
    </form>

  )
}

export default SearchBar