import React, { Component } from "react";

const solucoes = [
  {
    image: "P1", 
    nome: "Nome do Produto #1", 
    descricao: "Descrição do produto #1", 
    features: [
      {
        feature1: "• Feature 1"
      },
      {
        feature2: "• Feature 2"
      },
      {
        feature3: "• Feature 3"
      }
    ]
  },
  {
    image: "P2", 
    nome: "Nome do Produto #2", 
    descricao: "Descrição do produto #2", 
    features: [
      {
        feature1: "• Feature 1"
      },
      {
        feature2: "• Feature 2"
      },
      {
        feature3: "• Feature 3"
      }
    ]
  },
  {
    image: "P3", 
    nome: "Nome do Produto #3", 
    descricao: "Descrição do produto #3", 
    features: [
      {
        feature1: "• Feature 1"
      },
      {
        feature2: "• Feature 2"
      },
      {
        feature3: "• Feature 3"
      }
    ]
  },
  {
    image: "P4", 
    nome: "Nome do Produto #4", 
    descricao: "Descrição do produto #4", 
    features: [
      {
        feature1: "• Feature 1"
      },
      {
        feature2: "• Feature 2"
      },
      {
        feature3: "• Feature 3"
      }
    ]
  },
];

class Solucoes  extends Component {

  render() {

    const list = solucoes
    
    return (
      <div className="container">
        <h2><span>// </span>Nossas soluções</h2>
        <div className="solucoes-cards" >
          {list.map(item => {
            return (
              <div className="solucoes-cards--card" key={item}>
                <div className="solucoes-cards--card-img">{item.image}</div>
                <div className="solucoes-cards--card-nome">{item.nome}</div>
                <div className="solucoes-cards--card-descricao">{item.descricao}</div>
                {item.features.map(feat => {
                  return (
                    <ul className="solucoes-cards--card-list">
                      <li>{feat.feature1}</li>
                      <li>{feat.feature2}</li>
                      <li>{feat.feature3}</li>
                    </ul>
                  )
                })}
                <button className="solucoes-cards--card-button">Ver solução</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Solucoes;
