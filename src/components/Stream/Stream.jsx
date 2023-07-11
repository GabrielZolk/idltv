import './Stream.style.css';
import { WindowsContext } from '../../context/Windows';
import { useContext } from 'react';

export default function Stream() {
    const [gameVisible] = useContext(WindowsContext);
    const [lendasVisible] = useContext(WindowsContext);
    const [chatVisible] = useContext(WindowsContext);

    return (
        <div className='bg'>
            <div className='container'>
                <div className='left'>
                    {lendasVisible ? (
                        <div className='embed-twitch' style={{ display: 'flex' }}>
                            <iframe src="https://player.twitch.tv/?channel=baiano&parent=localhost" frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
                        </div>
                    ) : (
                        <div className='embed-twitch' style={{ display: 'none' }}></div>
                    )}

                </div>
                <div className='right'>
                    {gameVisible && (
                        <div className='embed-youtube'>
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/f3HqjYzPBUg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    )}
                    {chatVisible && (
                        <div className='embed-chat'>
                            <iframe
                                id="chat_embed"
                                src="https://www.twitch.tv/embed/baiano/chat?parent=localhost"
                                height="100%"
                                width="100%">
                            </iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
