import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput2 from './components/UserInput2.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10
  });

  const isValidInput = userInput.duration >= 1 && userInput.initialInvestment > 0;

  const userInputHandler = (inputIdentifier, inputAmount) => {
    setUserInput(prevInput => {
      return {
        ...prevInput,[inputIdentifier]: +inputAmount 
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput2 userInput={ userInput } onChangeInput={ userInputHandler }/>
      { !isValidInput && <p className='center'>Please enter values greater than 0</p> }
      { isValidInput && <Results input={ userInput }/> }
    </>

  )
}

export default App
