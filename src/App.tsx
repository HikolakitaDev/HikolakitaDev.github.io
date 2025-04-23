
import './App.css'
import VisualSVG from './components/blob';
import Square from './components/pointed-square';

function App() {

  return (
    <>
      <div className="main-container">
        <Square />
        <p className='introducing-text'>Hey, I'm a</p>
        <p className='main-text'>Frontend<br/><span>Developer</span></p>
        <p className="description">I’m a self-made frontend developer,<br/>currently Freelancing.</p>
        <button className="get-in-touch">Get in touch</button>
        <div className="blobContainer">
          <VisualSVG />
        </div>
      </div>
    </>
  )
}

export default App;
