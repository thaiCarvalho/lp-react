import logo from '../images/logoJussiVectorGreen.png';
import logoCart from '../icons/shopping-cart.svg';
import ListSeach from './SearchBar/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container--left">
          <ul>
            <li><img src={logo} alt="logo" /></li>
            <li><AnchorLink href="#solucoes">Nossas soluções</AnchorLink></li>
            <li><AnchorLink href="#conheca">Conheça a Jüssi</AnchorLink></li>
          </ul>
        </div>
        <div className="header-container--right">
          <ListSeach />
          <ul>
            <li><a href="#">Login</a></li>
            <a className="logo-cart"><img alt="logo" src={logoCart}/></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
