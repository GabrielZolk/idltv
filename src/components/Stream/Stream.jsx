import { ChatContext, ChatModeContext } from '../../context/chatContext';
import { GameContext, GameModeContext } from '../../context/gameContext';
import { LendasContext, LendasModeContext } from '../../context/lendasContext';
import ChatEmbed from '../ChatEmbed/ChatEmbed';
import GameEmbed from '../GameEmbed/GameEmbed';
import TwitchEmbed from '../TwitchEmbed/TwitchEmbed';
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
                        <TwitchEmbed display={lendasVisible ? 'flex' : 'none'} />
                    )}
                    {gameMode && (
                        <GameEmbed
                            display={gameVisible ? 'flex' : 'none'}
                            height={'80vh'}
                            width={'72vw'}
                            marginLeft={'5px'} />
                    )}
                    {chatMode && (
                        <ChatEmbed
                            display={chatVisible ? 'flex' : 'none'}
                            width={'60vw'}
                            height={'80vh'}
                            marginLeft={'0px'}
                            marginRight={'5px'} />
                    )}
                </div>
                <div className='right' style={{ display: gameVisible && lendasVisible && chatVisible ? 'block' : 'flex' }}>
                    {lendasMode && (
                        <>
                            <GameEmbed
                                display={gameVisible ? 'flex' : 'none'}
                                height={lendasVisible ? '37%' : '100%'}
                                width={lendasVisible ? '26vw' : '72vw'}
                                marginLeft={'5px'}
                                marginBottom={'5px'} />

                            <ChatEmbed
                                display={chatVisible ? 'flex' : 'none'}
                                width={gameVisible || lendasVisible ? '26vw' : '90vw'}
                                height={gameVisible && lendasVisible ? '62%' : '100%'}
                                marginLeft={'5px'}
                                marginRight={'5px'} />
                        </>
                    )}
                    {gameMode && (
                        <>
                            <TwitchEmbed
                                display={lendasVisible ? 'flex' : 'none'}
                                width={gameVisible ? '26vw' : '70vw'}
                                height={gameVisible ? '40%' : '100%'}
                                marginLeft={'5px'}
                                marginBottom={'5px'}
                            />

                            <ChatEmbed
                                display={chatVisible ? 'flex' : 'none'}
                                width={gameVisible || lendasVisible ? '26vw' : '90vw'}
                                height={gameVisible && lendasVisible ? '59%' : '100%'}
                                marginLeft={'5px'}
                                marginRight={'5px'}
                            />
                        </>
                    )}
                    {chatMode && (
                        <>
                            <TwitchEmbed
                                display={lendasVisible ? 'flex' : 'none'}
                                width={chatVisible ? '38vw' : '45vw'}
                                height={chatVisible ? '49%' : '100%'}
                                marginLeft={'0px'}
                                marginBottom={'5px'}
                            />
                            
                            <GameEmbed
                                display={gameVisible ? 'flex' : 'none'}
                                width={chatVisible ? '38vw' : '53vw'}
                                height={chatVisible ? '49%' : '100%'}
                                marginLeft={'0px'}
                                marginTop={'10px'}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
