import React, { Component } from "react";
import logoBrastemp from '../images/logo-brastemp.png';
import logoCompraCerta from '../images/logo-compra-certa.png';
import logoConsul from '../images/logo-consul.png';
import logoTheBar from '../images/logo-thebar.png';

const ListaLojas = ({
  href,
  children,
  id,
  image
}) => {
  let body;
  if(children) {
    body = children;
  } else {
    if (image) {
			const imageContent = (
				<span>{image}</span>
			);

			body = (
				<div className="lojas-logo--parceiros">
					{imageContent}
				</div>
			);
		} else {
			return null
		}
  }

  return (
    <a
      target="_blank"
      href={href}
      className="lojas-logo__item"
      id={id}
      rel="noreferrer"
    >
      {body}
    </a>
  )
}

const List = ({children}) => <div className="lojas-logo">{children}</div>

class Lojas extends Component {
  static logos = {
		brastemp: (
      <img src={logoBrastemp} alt="logoBrastemp"/>
		),
		compracerta: (
      <img src={logoCompraCerta} alt="logoCompraCerta"/>
		),
		consul: (
      <img src={logoConsul} alt="logoConsul"/>
		),
		theBar: (
      <img src={logoTheBar} alt="logoTheBar"/>
    )
  };

  static list = [
    <ListaLojas
      image={Lojas.logos.brastemp}
      id="brastemp"
      href="https://www.brastemp.com.br/"
      key="1"
    />,
    <ListaLojas
      image={Lojas.logos.compracerta}
      id="compracerta"
      href="https://www.compracerta.com.br/"
      key="2"
    />,
    <ListaLojas
      image={Lojas.logos.consul}
      id="consul"
      href="https://loja.consul.com.br/"
      key="3"
    />,
    <ListaLojas
      image={Lojas.logos.theBar}
      id="theBar"
      href="https://www.br.thebar.com/"
      key="4"
    />
  ]
  
  render() {

    return (
      <div className="container">
        <div className="lojas-content">
          <div className="lojas-content--text"><p>Nossas principais lojas VTEX <span> → </span></p></div>
          <List>{Lojas.list}</List>
        </div>
      </div>
    )
  }
}

export default Lojas;
