import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Stream from "../components/Stream/Stream";


export default function Home() {
  return (
    <div className="home-container" style={{height: '100vh'}}>
      <Navbar />
      <Stream />
      <Footer />
    </div>
  )
}
