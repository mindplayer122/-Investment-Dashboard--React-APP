import React from "react";
import './UserInput.css';



const UserInput = ({userInput, onInputHandler, onReset, currency, setCurrency, Rates}) => {

    const currencySymbols ={GBP: "£", USD: "$", EUR: "€"};

    const convert =(value) =>{
        return(value * Rates[currency]).toFixed(2);
    }

    return(
        <section id="user-input">
            <form>
                <div className="input-group">
                    <label htmlFor="currency">Currency</label>
                    <select id="currency" value={currency}
                    onChange={(e) => setCurrency(e.target.value)}>
                        <option value="GBP">GBP (£)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                    </select>
                </div>
                <div className="input-group">
                    <label htmlFor="intInvestment">Initial Investment ({currencySymbols[currency]})</label>
                    <input type="number" id="intInvestment" value={userInput.intInvestment}
                    onChange={(e) => onInputHandler('intInvestment', e.target.value)}
                    required min="0"/>
                </div>
                <div className="input-group">
                    <label htmlFor="annInvestment">Annual Investment ({currencySymbols[currency]})</label>
                    <input type="number" id="annInvestment" value={userInput.annInvestment}
                    onChange={(e) => onInputHandler('annInvestment', e.target.value)}  
                    required min="0"/>
                </div>
                <div className="input-group">
                    <label htmlFor="expReturn">Expected Return (%)</label>
                    <input type="number" id="expReturn" value={userInput.expReturn}
                    onChange={(e) => onInputHandler('expReturn', e.target.value)}  required min="0"/>
                </div>
                <div className="input-group">
                    <label htmlFor="duration">Duration (years)</label>
                    <input type="number" id="duration" value={userInput.duration}
                    onChange={(e) => onInputHandler('duration', e.target.value)}  required min="0"/>
                </div>
                
                <div className="actions">
                    <button type="reset" onClick={onReset}>
                        Reset
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UserInput;