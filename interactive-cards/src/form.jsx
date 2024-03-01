export function Form(){
    return(
        <div className='form-container'>
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
      <button>Confirm</button>
        </div>
    
      </div>
    )
}