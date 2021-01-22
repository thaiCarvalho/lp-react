import './App.scss'
import banner from './images/image.png'
import Header from './components/Header'
import Lojas from './components/Lojas'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="banner">
        <div className="container">
          <div className="banner-container">
            <div className="banner--left">
              <div className="banner-title"><span>//</span><h1>Criamos lojas que vendem mais.</h1></div>
              <div className="banner-content">A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</div>
              <div className="banner-button" >
                 <a href="#solucoes">Veja nossas soluções</a>
              </div>
            </div>
            <div className="banner--right">
              <img className="banner-img" src={banner} alt="img"/>
            </div>
          </div>
        </div>
      </section>
      <section className="lojas">
        <Lojas />
      </section>
      <section className="solucoes">

      </section>
      <section className="quem-somos">

      </section>
      <section className="contato">

      </section>
      <section className="news">

      </section>
      <section className="footer">

      </section>
    </div>
  );
}

export default App;
