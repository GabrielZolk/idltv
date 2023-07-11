import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.style.css';
import { BsEyeSlash } from 'react-icons/bs';
import { WindowsContext } from '../../context/Windows';

export default function Navbar() {
  const [gameVisible, setGameVisible] = useContext(WindowsContext);
  const [lendasVisible, setLendasVisible] = useContext(WindowsContext);
  const [chatVisible, setChatVisible] = useContext(WindowsContext);

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('MULTI');

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('MULTI');
    } else if (location.pathname === '/cartinhas') {
      setActiveTab('CARTINHAS');
    }
  }, [location.pathname]);

  const toggleGame = () => {
    setGameVisible(!gameVisible);
  };

  const toggleLendas = () => {
    setLendasVisible(!lendasVisible);
  };

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <header>
      <img src='./logo.png' alt='logo ilha das lendas' />
      <div className='stream'>
        <p>SELECIONE A TELA PRINCIPAL</p>
        <ul>
          <li><p>GAME</p> <span onClick={toggleGame}><BsEyeSlash /></span></li>
          <li><p>LENDAS</p> <span onClick={toggleLendas}><BsEyeSlash /></span></li>
          <li><p>CHAT</p> <span onClick={toggleChat}><BsEyeSlash /></span> </li>
        </ul>
      </div>
      <nav>
        <ul>
          <a href='/'><li className={activeTab === 'MULTI' ? 'active' : ''}>MULTI</li></a>
          <a href='/cartinhas'><li className={activeTab === 'CARTINHAS' ? 'active' : ''}>CARTINHAS</li></a>
        </ul>
      </nav>
    </header>
  );
}
