import { useState } from 'react';

const UserInput = () => {

  return (
    <section id="user-input">
      <div className="input-group" >
        <p>
          <label>Initial Investment</label>
          <input 
            type='number' required 
            value={ userInput.initialInvestment } 
            onChange={(event) => inputChangeHandler('initialInvestment',event.target.value) }/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type='number' required 
            value={ userInput.annualInvestment } 
            onChange={(event) => inputChangeHandler('annualInvestment',event.target.value) }/>
        </p>
      </div>
      <div className="input-group" >
        <p>
          <label>Expected Return</label>
          <input 
            type='number' required 
            value={ userInput.expectedReturn } 
            onChange={(event) => inputChangeHandler('expectedReturn',event.target.value) }/>
        </p>
        <p>
          <label>Duration</label>
          <input 
            type='number' required 
            value={ userInput.duration } 
            onChange={(event) => inputChangeHandler('duration',event.target.value) }/>
        </p>
      </div>
    </section>
  )
}

export default UserInput;