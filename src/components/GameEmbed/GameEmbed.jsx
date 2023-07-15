import './GameEmbed.css';

// eslint-disable-next-line react/prop-types
export default function GameEmbed({ display, height, width, marginLeft, marginBottom, marginTop }) {
    return (
        <div className='embed-youtube' style={{
            display,
            height,
            width,
            marginLeft,
            marginBottom,
            marginTop
        }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ujia4cLrE6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}
