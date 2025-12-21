import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import UserInput from './components/UserInput';
import OutputData from './components/OutputData';

const Initialvalues ={
      intInvestment: 10000,
      annInvestment: 1200,
      expReturn: 6,
      duration: 10
  };

  
export default function App() {
  const [userInput, setUserInput] = useState({Initialvalues});
  const [currency, setCurrency] = useState("GBP");
  const [error , setError] = useState("");


  const Rates = {
        GBP: 1,
        USD: 1.27,
        EUR: 1.17
    };

  const inputHandler = (inputId, newValue) => {
    const value = +newValue;
    if(isNaN(value) || value < 0){
      alert("please entera valid non-negative number");
      return;
    }

    if(newValue === ""){
      setError("all fields are required.");
      return;
    }

    if(newValue < 0){
      setError("values cannot be negative.");
      return;
     }

     if(inputId === "duration" && value < 1){
      setError("Duration must be at least 1 year.");
      return;
     }

     setError("");

    setUserInput((prev) => ({
        ...prev,
        [inputId]: +newValue
    }));
    };

    const resetHandler = ()=> {
        setUserInput(Initialvalues);
    };

  return (
    <>
    <Header title='Investment Calculator' subtitle='Plan your Financial future'/>
    <UserInput
        userInput={userInput}
        onInputHandler={inputHandler}
        onReset={resetHandler}
        setCurrency={setCurrency}
        Rates={Rates}
      />
      {error && <p className="error-text">{error}</p>}  

    <OutputData inputValue={userInput}/>
    </>
  );
}



