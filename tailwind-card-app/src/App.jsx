import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';
import Header from './components/Header';
import UserInput from './components/UserInput';
import OutputData from './components/OutputData';

const Initial_values ={
      intInvestment: 10000,
          annInvestment: 1200,
          expReturn: 6,
          duration: 10
  };

  
export default function App() {
  const [userInput, setUserInput] = useState({Initial_values});
  const [currency, setCurrency] = useState("GBP");

  const Rates = {
        GBP: 1,
        USD: 1.27,
        EUR: 1.17
    };

  const inputHandler = (inputId, newValue) => {
        setUserInput((prev) => ({
            ...prev,
            [inputId]: +newValue
        }));
    };

    const resetHander = ()=> {
        setUserInput(Initial_values);
    };
  return (
    <>
    <Header title='Investment Calculator' subtitle='Plan your Financial future'/>
    <UserInput userInput={UserInput} onInputHandler={inputHandler}/>
    <OutputData inputValue={userInput}/>
    </>
  );
}



