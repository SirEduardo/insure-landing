import { useState } from 'react'
import './App.css'

function App() {

      
  const [Confirm, setConfirm] = useState(false)

  const handleButton = () =>{
    setConfirm(!Confirm)
  }
  
  

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
 
    <div className='form-container'>
      {!Confirm ? (
      <div className='form'>
        <p>CARDHOLDER NAME</p>
        <input type='text' className='name' placeholder='e.g.Jane Appleseed'/>
        <p>CARD NUMBER</p>
        <input type='text' className='number' placeholder='e.g. 1234 5678 9123 0000'/>
        <div className='div-form'>
          <div className='exp-date'>
          <p>EXP.DATE (MM/YY)</p>
          <input type='text' className='month' placeholder='MM'/>
          <input type='text' className='year' placeholder='YY'/>
          </div>
          <div className='cvc-container'>
          <p>CVC</p>
          <input type='text' className='cvc' placeholder='e.g.123'/>
          </div>
        </div>
      <button onClick={handleButton}>Confirm</button>
      </div>
      ):(
        <div className="thank-you">
        <img src="../images/icon-complete.svg" alt="Complete icon" key="complete-icon"/>
        <strong>THANK YOU!</strong>
        <p>We`ve added your card details</p>
        <button onClick={handleButton}>Continue</button>
        </div>
      )}
    </div>
  

    
    </main>
  )
}

export default App
