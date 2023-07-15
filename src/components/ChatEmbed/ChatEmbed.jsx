import './ChatEmbed.css';

// eslint-disable-next-line react/prop-types
export default function ChatEmbed({ display, width, height, marginLeft, marginRight }) {
  return (
    <div className='embed-chat' style={{
        display,
        width,
        height,
        marginLeft,
        marginRight,
    }}>
        <iframe
            id="chat_embed"
            src={`https://www.twitch.tv/embed/baiano/chat?&darkpopout&parent=${'idltv.vercel.app' && 'localhost'}`}
            height="100%"
            width="100%">
        </iframe>
    </div>
  )
}

