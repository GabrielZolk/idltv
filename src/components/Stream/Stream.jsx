import { ChatContext, ChatModeContext } from '../../context/chatContext';
import { GameContext, GameModeContext } from '../../context/gameContext';
import { LendasContext, LendasModeContext } from '../../context/lendasContext';
import './Stream.style.css';

import { useContext } from 'react';

export default function Stream() {
    const [gameVisible] = useContext(GameContext);
    const [lendasVisible] = useContext(LendasContext);
    const [chatVisible] = useContext(ChatContext);

    const [gameMode] = useContext(GameModeContext);
    const [lendasMode] = useContext(LendasModeContext);
    const [chatMode] = useContext(ChatModeContext);

    return (
        <div className='bg'>
            <div className='container'>
                <div className='left'>
                    {lendasMode && (
                        <div className='embed-twitch' style={{
                            display: lendasVisible ? 'flex' : 'none'
                        }}>
                            <iframe src="https://player.twitch.tv/?channel=baiano&parent=localhost" frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
                        </div>
                    )}
                    {gameMode && (
                        <div className='embed-youtube' style={{
                            display: gameVisible ? 'flex' : 'none',
                            height: '80vh',
                            width: '72vw',
                            marginLeft: '5px'
                        }}>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/e4K9Dqh5F3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    )}
                    {chatMode && (
                        <div className='embed-chat' style={{
                            display: chatVisible ? 'flex' : 'none',
                            width: '60vw',
                            height: '80vh',
                            marginLeft: '5px',
                            marginRight: '5px',
                        }}>
                            <iframe
                                id="chat_embed"
                                src="https://www.twitch.tv/embed/baiano/chat?&darkpopout&parent=idltv.vercel.app"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                    )}
                </div>
                <div className='right' style={{ display: gameVisible && lendasVisible && chatVisible ? 'block' : 'flex' }}>
                    {lendasMode && (
                        <>
                            <div className='embed-youtube' style={{
                                display: gameVisible ? 'flex' : 'none',
                                height: lendasVisible ? '37%' : '100%',
                                width: lendasVisible ? '26vw' : '72vw',
                                marginLeft: '5px',
                                marginBottom: '5px',
                            }}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/e4K9Dqh5F3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                            <div className='embed-chat' style={{
                                display: chatVisible ? 'flex' : 'none',
                                height: gameVisible && lendasVisible ? '62%' : '100%',
                                marginLeft: '5px',
                                marginRight: '5px',
                                width: gameVisible || lendasVisible ? '26vw' : '90vw'
                            }}>
                                <iframe
                                    id="chat_embed"
                                    src="https://www.twitch.tv/embed/baiano/chat?parent=localhost"
                                    height="100%"
                                    width="100%">
                                </iframe>
                            </div>
                        </>
                    )}
                    {gameMode && (
                        <>
                            <div className='embed-twitch' style={{
                                display: lendasVisible ? 'flex' : 'none',
                                width: gameVisible ? '26vw' : '70vw',
                                height: gameVisible ? '40%' : '100%',
                                marginLeft: '5px',
                                marginBottom: '5px'
                            }}>
                                <iframe src="https://player.twitch.tv/?channel=baiano&parent=localhost" frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
                            </div>
                            <div className='embed-chat' style={{
                                display: chatVisible ? 'flex' : 'none',
                                height: gameVisible && lendasVisible ? '59%' : '100%',
                                marginLeft: '5px',
                                marginRight: '5px',
                                width: gameVisible || lendasVisible ? '26vw' : '90vw'
                            }}>
                                <iframe
                                    id="chat_embed"
                                    src="https://www.twitch.tv/embed/baiano/chat?parent=localhost"
                                    height="100%"
                                    width="100%">
                                </iframe>
                            </div>
                        </>
                    )}
                    {chatMode && (
                        <>
                            <div className='embed-twitch' style={{
                                display: lendasVisible ? 'flex' : 'none',
                                width: chatVisible ? '38vw' : '45vw',
                                height: chatVisible ? '49%' : '100%',
                                marginLeft: '5px',
                                marginBottom: '5px'
                            }}>
                                <iframe src="https://player.twitch.tv/?channel=baiano&parent=localhost" frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
                            </div>
                            <div className='embed-youtube' style={{
                                display: gameVisible ? 'flex' : 'none',
                                width: chatVisible ? '38vw' : '53vw',
                                height: chatVisible ? '49%' : '100%',
                                marginLeft: '5px'
                            }}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/e4K9Dqh5F3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
