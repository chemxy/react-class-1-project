import { useState } from "react";

export default function UserInput2({input, showResult}) {

    const [userInput, setUserInput] = useState(input);

    function handleChange(type, newValue) {
        const updatedUserInput = {
            ...userInput,
            [type]: Number(newValue)
        }
        console.log(updatedUserInput);
        setUserInput(updatedUserInput);
    }

    function submitResult(){
        showResult(userInput);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                           value={userInput.initialInvestment}
                           onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                           value={userInput.annualInvestment}
                           onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                           value={userInput.expectedReturn}
                           onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                           value={userInput.duration}
                           onChange={(event) => handleChange('duration', event.target.value)}/>
                </p>
            </div>
            <div>
                <button id="show-result-button" onClick={submitResult}>show</button>
            </div>
        </div>

    )
}