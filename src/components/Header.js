import logo from '../images/logoJussiVectorGreen.png';
import logoCart from '../icons/shopping-cart.svg';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container--left">
          
          <ul>
            <li>
              <img 
                src={logo}
                alt="logo"
              />
            </li>
            <li>
              <a href="#solucoes">Nossas soluções</a>
            </li>
            <li>
              <a href="#conheca">Conheça a Jüssi</a>
            </li>
          </ul>
        </div>
        <div className="header-container--right">
          <div id="#header-busca"></div>
          <ul>
            <li>
              <a href="#">Login</a>
            </li>
            <a className="logo-cart"><img alt="logo" src={logoCart}/></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
