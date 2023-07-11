import './Footer.style.css';
import { BsTwitch, BsDiscord, BsTwitter, BsTiktok } from 'react-icons/bs';
import { AiOutlineInstagram, } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';

export default function Footer() {
  return (
    <footer>
      <a id='twitch' href='https://www.twitch.tv/baiano' target='_blank' rel="noreferrer"><BsTwitch /> <span>TWITCH</span></a>
      <a id='instagram' href='https://www.instagram.com/ilhadaslendas/' target='_blank' rel="noreferrer"><AiOutlineInstagram /> <span>INSTAGRAM</span></a>
      <a id='youtube' href='https://www.youtube.com/@ilhadaslendas' target='_blank' rel="noreferrer"><TfiYoutube /> <span>YOUTUBE</span></a>
      <a id='discord' href='https://discord.com/invite/ilhadaslendas' target='_blank' rel="noreferrer"><BsDiscord /> <span>DISCORD</span></a>
      <a id='twitter' href='https://twitter.com/ilhadaslendas' target='_blank' rel="noreferrer"><BsTwitter /> <span>TWITTER</span></a>
      <a id='tiktok' href='https://www.tiktok.com/@ilhadaslendas' target='_blank' rel="noreferrer"><BsTiktok /> <span>TIKTOK</span></a>
    </footer>
  )
}
