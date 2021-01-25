import React, { Component } from "react";
import CatsList from "./CatsList";
import SearchBar from "./SearchBar";

class ListSeach  extends Component {

  state = {
    seachField: '',
    list: [],
    focus: false
  }

  handleChange = (e) => {
    this.setState({seachField: e.target.value})
  }

  handleClick = () => {
    document.querySelector('.header-searchBox--overlay').classList.add('active')
    const result = document.querySelector('.header-result')
    if(result) {
      result.classList.remove('hidden')
    }
  }

  handleClickOutside() {
    document.querySelector('.header-searchBox--overlay').classList.remove('active')
    const result = document.querySelector('.header-result')
    if(result) {
      result.classList.add('hidden')
    }
	}

  async fetchApi() {
    const url = await fetch("https://api.thecatapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "4559c51c-73a5-40b0-87ac-0b6fd63e4317" //requisito para a api :(
      },
    });
    this.setState({ list: await url.json() });
  }

  componentDidMount() {
    this.fetchApi()
    // document.addEventListener('mousedown', this.handleClickOutside)
  }

  render() {
    const {seachField, list } = this.state;
    const filtered = list.filter(res =>(
      res.name.toLowerCase().includes(seachField.toLocaleLowerCase())
    ));

    return (
      <div>
        <SearchBar 
          placeholder="Buscar" 
          handlechange={this.handleChange}
          handleClick={this.handleClick}
       />
        {seachField && (
          <CatsList list={filtered} />
        )}
      </div>
    )
  }

}

export default ListSeach;