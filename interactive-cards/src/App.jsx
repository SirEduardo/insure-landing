import { Form } from './form'
import './App.css'

function App() {


  return (
    <main className='container'>
    <aside>
    <img src='../images/bg-main-desktop.png' alt='main-desktop'/>
  
  <div className="card-section">
    <div className="card-front">
      <div className="dots-box">
        <div className="white-big-dot"></div>
        <div className="white-circle"></div>
      </div>
      <p className="card-number">0000 0000 0000 0000</p>
      <div className="bot-inf">
        <p className="name">JANE APPLESEED</p>
        <p className="exp-date">00/00</p>
      </div>
    </div>
    <div className='card-back'>
      <p className='cvc-code'>000</p>
    </div>
  </div>
  </aside>

    <Form/>
    </main>
  )
}

export default App
