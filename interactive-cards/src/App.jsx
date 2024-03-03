import { useState } from 'react'
import './App.css'

function App() {

  const[cardNumber, setCardNumber] = useState("")
  const[cardName, setCardName] = useState("")
  const[cardMonth, setCardMonth] = useState ("")
  const[cardYear, setCardYear] = useState('')
  const[cvc, setCvc] = useState("")
  const[Confirm, setConfirm] = useState(false)
  const[errors, setErrors] = useState({})

  const validateInputs = () =>{
    const newErrors = {}
    if (!cardName.trim()){
      newErrors.cardName = "Name cannot be blank";
    }
    
    if(cardNumber.replace(/\s/g,"").length !==16){
      newErrors.cardNumber = "Please complete the digits";
    }
    
    if(!cardMonth.trim()){
      newErrors.cardMonth = 'Can`t be blank';
    }
    
    if(!cardYear.trim()){
      newErrors.cardYear = "Can`t be blank"
    }
    
    if(!cvc.trim()){
      newErrors.cvc = "Can`t be blank";
    }

  setErrors(newErrors)
  return Object.keys(newErrors).length ===0
  }

  const handleButton = () =>{
    if(validateInputs()){
      setConfirm(true)
      setCardName('')
      setCardNumber('')
      setCardMonth('')
      setCardYear('')
      setCvc('')
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
  const handleMonthChange = (e) =>{
    const inputVal = (e.target.value)
    const limitedVal = inputVal.slice(0,2)
    setCardMonth(limitedVal)
  };
  const handleYearChange = (e) =>{
    const inputVal = (e.target.value);
    const limitedVal = inputVal.slice(0,2);
    setCardYear(limitedVal)
  };
  const handleCvcChange = (e) =>{
    const inputVal = (e.target.value);
    const limitedVal = inputVal.slice(0,3)
    setCvc(limitedVal)
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
      <p className="card-number">{cardNumber || '0000 0000 0000 0000'}</p>
      <div className="bot-inf">
        <p className="name">{cardName || ' JANE APPLESEED'}</p>
        <p className="exp-date">{cardMonth || '00'}/{cardYear || '00'}</p>
      </div>
    </div>
    <div className='card-back'>
      <p className='cvc-code'>{cvc || '000'}</p>
    </div>
  </div>
  </aside>
 
    <div className='form-container'>
      {!Confirm ? (
      <div className='form'>
        <p>CARDHOLDER NAME</p>
        <input type='text' className='name' value={cardName} onChange={handleCardNameChange} placeholder='Jane Appleseed' required/>
        {errors.cardName && <p className='error-message' >{errors.cardName}</p>}
        <p>CARD NUMBER</p>
        <input type='text' className='number' value={cardNumber} onChange={handleCardNumberChange} placeholder=' 1234 5678 9123 0000' required/>
        {errors.cardNumber && <p className='error-message' >{errors.cardNumber}</p>}
        <div className='div-form'>
          <div className='exp-date'>
          <p>EXP.DATE (MM/YY)</p>
          <input type='text' className='month' value={cardMonth} min={'01'} max={'12'}  onChange={handleMonthChange} placeholder='MM' required/>
          <input type='text' className='year' value={cardYear} min={'00'} max={'99'} onChange={handleYearChange} placeholder='YY' required/>
          {errors.cardMonth && <p className='error-message'>{errors.cardMonth}</p>}
          </div>
          <div className='cvc-container'>
          <p>CVC</p>
          <input type='text' className='cvc' value={cvc} onChange={handleCvcChange} placeholder='123' required/>
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
