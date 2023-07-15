import './TwitchEmbed.css';

/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
export default function TwitchEmbed({ display, width, height,  marginLeft, marginBottom }) {
  return (
    <div className='embed-twitch' style={{
        display,
        width,
        height,
        marginLeft,
        marginBottom
    }}>
        <iframe src={`https://player.twitch.tv/?channel=baiano&parent=${'idltv.vercel.app' && 'localhost'}`} frameBorder="0" allowFullScreen="true" scrolling="no" height="100%" width="100%"></iframe>
    </div>
  )
}
