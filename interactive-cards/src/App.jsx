import { useState } from 'react'
import './App.css'

function App() {

  const[cardNumber, setCardNumber] = useState("0000 0000 0000 0000")
  const[cardName, setCardName] = useState("JANE APPLESEED")
  const[cvc, setCvc] = useState("000")
  const[Confirm, setConfirm] = useState(false)
  const[errors, setErrors] = useState("")

  const validateInputs = () =>{
    const newErrors = {}
    if(cardNumber.replace(/\s/g,"").length !==16){
     newErrors.cardNumber = "Por favor, complete los digitos";
    }if (cardName.trim() === ''){
      newErrors.cardName = "Can`t be blank";
    }if (cvc.trim() === ''){
      newErrors.cvc = "Can`t be blank";
    }
  setErrors(newErrors)
  return Object.keys(newErrors).length ===0
  }
  const handleButton = () =>{
    if(validateInputs()){
      setConfirm(true)
    }
  }  

  const handleCardNumberChange = (e) =>{
    const input = e.target.value.replace(/\D/g,'');
    let formattedInput = input.match(/.{1,4}/g);
    if(formattedInput){
      formattedInput = formattedInput.join(' ').slice(0, 19);
    setCardNumber(formattedInput);
  }
}
  const handleCardNameChange = (e) =>{
    setCardName(e.target.value.toUpperCase());
  }
  const handleCvcChange = (e) =>{
    setCvc(e.target.value);
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
      <p className="card-number">{cardNumber}</p>
      <div className="bot-inf">
        <p className="name">{cardName}</p>
        <p className="exp-date">00/00</p>
      </div>
    </div>
    <div className='card-back'>
      <p className='cvc-code'>{cvc}</p>
    </div>
  </div>
  </aside>
 
    <div className='form-container'>
      {!Confirm ? (
      <div className='form'>
        <p>CARDHOLDER NAME</p>
        <input type='text' className='name' onChange={handleCardNameChange} placeholder='e.g.Jane Appleseed'/>
        {errors.cardName && <p className='error-message' >{errors.cardName}</p>}
        <p>CARD NUMBER</p>
        <input type='text' className='number' onChange={handleCardNumberChange} placeholder='e.g. 1234 5678 9123 0000'/>
        {errors.cardNumber && <p className='error-message' >{errors.cardNumber}</p>}
        <div className='div-form'>
          <div className='exp-date'>
          <p>EXP.DATE (MM/YY)</p>
          <input type='text' className='month' placeholder='MM'/>
          <input type='text' className='year' placeholder='YY'/>
          </div>
          <div className='cvc-container'>
          <p>CVC</p>
          <input type='text' className='cvc' onChange={handleCvcChange} placeholder='e.g.123'/>
          {errors.cvc && <p className='error-message' >{errors.cvc}</p>}
          </div>
        </div>
      <button onClick={handleButton} >Confirm</button>
      </div>
      ):(
        <div className="thank-you">
        <img src="../images/icon-complete.svg" alt="Complete icon" key="complete-icon"/>
        <strong>THANK YOU!</strong>
        <p>We`ve added your card details</p>
        <button onClick={() => setConfirm(false)}>Continue</button>
        </div>
      )}
    </div>
  

    
    </main>
  )
}

export default App
