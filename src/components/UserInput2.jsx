import { useState } from 'react';

const userInput2 = () => {
  const [userInput,setUserInput] = useState({
      initialInvestment: 12000,
      annualInvestment: 1200,
      expectedReturn: 7,
      duration: 10
    });

    function handleUserInput(inputIdentifier,newInput) {
      setUserInput(prevInput => {
        return {
          ...prevInput, [inputIdentifier]: newInput
        }
      });
    }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={ userInput.initialInvestment }
            onChange={(event) => handleUserInput('initialInvestment',event.target.value) }
          >
          </input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            required
            value={ userInput.annualInvestment }
            onChange={(event) => handleUserInput('annualInvestment',event.target.value) }
          >
          </input>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            required
            value={ userInput.expectedReturn }
            onChange={(event) => handleUserInput('expectedReturn',event.target.value) }
          >
          </input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={ userInput.duration }
            onChange={(event) => handleUserInput('duration',event.target.value) }
          >
          </input>
        </p>
      </div>
    </section>
  )
};

export default userInput2;