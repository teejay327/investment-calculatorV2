import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput2 from './components/UserInput2.jsx';

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturn: 7,
    duration: 10
  });

  function inputChangeHandler(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput, [inputIdentifier]: newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput2 onChangeInput={ inputChangeHandler}/>
    </>

  )
}

export default App
