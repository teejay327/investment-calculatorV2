const userInput2 = ({ onChange }) => {
  const [userInput,setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10
  })

  const userInputHandler = (inputIdentifier, inputAmount) => {
    setUserInput(prevInput => {
      return {
        ...prevInput,[inputIdentifier]: inputAmount 
      }
    })
  }

  return (
    <section id="user-input">
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={ userInput.initialInvestment }
            onChange={(event) => onChange('initialInvestment', (event.target.value)) }
          >       
          </input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type='number'
            required   
            value={ userInput.annualInvestment}  
            onChange={(event) =>  onChange('annualInvestment', (event.target.value)) }       
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
            onChange={(event) => userInputHandler('expectedReturn',(event.target.value)) }
          >
          </input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required     
            value={ userInput.duration } 
            onChange={(event) => userInputHandler('duration',(event.target.value)) }    
          >         
          </input>
        </p>
      </div>

    </section>
  )
};

export default userInput2;