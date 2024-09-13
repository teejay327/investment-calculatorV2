const userInput2 = ({ onChangeInput, userInput }) => {

  return (
    <section id="user-input">
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={ userInput.initialInvestment }
            onChange={(event) => onChangeInput('initialInvestment', (event.target.value)) }
          >       
          </input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            required   
            value={ userInput.annualInvestment}  
            onChange={(event) =>  onChangeInput('annualInvestment', (event.target.value)) }       
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
            onChange={(event) => onChangeInput('expectedReturn',(event.target.value)) }
          >
          </input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required     
            value={ userInput.duration } 
            onChange={(event) => onChangeInput('duration',(event.target.value)) }    
          >         
          </input>
        </p>
      </div>

    </section>
  )
};

export default userInput2;