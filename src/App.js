import './App.scss'
import banner from './images/image.png'
import Header from './components/Header'
import Lojas from './components/Lojas'
import Solucoes from './components/NossasSolucoes'
import quemSomosImg from './images/image-jussi.jpg'
import iconFacebook from './images/facebook.png'
import iconInstagram from './images/instagram.png'
import iconLinkedin from './images/linkedin.png'
import iconWppCompany from './images/wppcompany.png'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="home">
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
        <section className="solucoes" id="solucoes">
          <Solucoes />
        </section>
        <section className="quem-somos" id="conheca">
          <div className="container">
            <div className="quem-somos-content">
            <div className="quem-somos--left">
                <div className="quem-somos-title"><h2>Olá, somos a Jüssi</h2></div>
                <div className="quem-somos-text">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</div>
                <div className="quem-somos-button">
                  <a href="https://jussi.com.br/about.html" rel="noreferrer" target="_blank">Conheça a Jüssi</a>
                </div>
              </div>
              <div className="quem-somos--right">
                <img className="quem-somos-img" src={quemSomosImg} alt="img"/>
              </div>
            </div>
          </div>
        </section>
        <section className="contato">
          <div className="container">
            <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h2>
            <div className="contato-email">
              <span>Entre em contato</span>
              <p>comercial@jussi.com.br</p>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="container">
            <div className="news-content">
              <h2><span>//</span> receba novidades da nossa áreade produtos digitais.</h2>
              <form>
                <input className="news-input" type="text" placeholder="Digite seu e-mail" />
                <input className="news-submit" type="submit" value="cadastrar" />
              </form>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-content--img">
                <img src={iconWppCompany} alt="logo wpp"/>
              </div>
              <ul>
                <li><a href="https://pt-br.facebook.com/agencia.jussi/" rel="noreferrer" target="_blank"><img src={iconFacebook} alt="logo facebook"/></a></li>
                <li><a href="https://www.instagram.com/jussi/" rel="noreferrer" target="_blank"><img src={iconInstagram} alt="logo instagram"/></a></li>
                <li><a href="https://www.linkedin.com/company/agencia-jussi/" rel="noreferrer" target="_blank"><img src={iconLinkedin} alt="logo linkedin"/></a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App;
