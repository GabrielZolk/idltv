import { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.style.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { GameContext, GameModeContext } from '../../context/gameContext';
import { LendasContext, LendasModeContext } from '../../context/lendasContext';
import { ChatContext, ChatModeContext } from '../../context/chatContext';


export default function Navbar() {
  const [gameVisible, setGameVisible] = useContext(GameContext);
  const [lendasVisible, setLendasVisible] = useContext(LendasContext);
  const [chatVisible, setChatVisible] = useContext(ChatContext);

  const [gameMode, setGameMode] = useContext(GameModeContext);
  const [lendasMode, setLendasMode] = useContext(LendasModeContext);
  const [chatMode, setChatMode] = useContext(ChatModeContext);
  

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

  const gameModeFc = () => {
    setGameMode(true);
    setChatMode(false);
    setLendasMode(false);
    setGameVisible(true);
    setLendasVisible(true);
    setChatVisible(true);
  };

  const lendasModeFc = () => {
    setLendasMode(true);
    setChatMode(false);
    setGameMode(false);
    setGameVisible(true);
    setLendasVisible(true);
    setChatVisible(true);
  };

  const chatModeFc = () => {
    setChatMode(true);
    setLendasMode(false);
    setGameMode(false);
    setGameVisible(true);
    setLendasVisible(true);
    setChatVisible(true);
  };

  return (
    <header>
      <img src='./logo.png' alt='logo ilha das lendas' />
      <div className='stream'>
        <p>SELECIONE A TELA PRINCIPAL</p>
        <ul>
          <li><p className={gameMode ? 'active' : ''} onClick={gameModeFc}>GAME</p> <span onClick={toggleGame}>{gameVisible ? <BsEye /> : <BsEyeSlash />}</span></li>
          <li><p className={lendasMode ? 'active' : ''} onClick={lendasModeFc}>LENDAS</p> <span onClick={toggleLendas}>{lendasVisible ? <BsEye /> : <BsEyeSlash />}</span></li>
          <li><p className={chatMode ? 'active' : ''} onClick={chatModeFc}>CHAT</p> <span onClick={toggleChat}>{chatVisible ? <BsEye /> : <BsEyeSlash />}</span> </li>
        </ul>
      </div>
      <nav>
        <ul>
          <Link to='/'><li className={activeTab === 'MULTI' ? 'active' : ''}>MULTI</li></Link>
          <Link to='/cartinhas'><li className={activeTab === 'CARTINHAS' ? 'active' : ''}>CARTINHAS</li></Link>
        </ul>
      </nav>
    </header>
  );
}
