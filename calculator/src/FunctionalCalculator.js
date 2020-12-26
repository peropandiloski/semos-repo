import React, { useState } from 'react'

const FunctionalCalculator = () => {

    const [rezultat, setRezultat] = useState(0)
    const [numA, setNumA] = useState(" ")
    const [numB, setNumB] = useState(" ")
    const [operation, setOperation] = useState(" ")

    const inputOne = (event) => {
        const numberOneValue = event.target.value
        setNumA(numberOneValue)
    }

    const inputTwo = (event) => {
        const numberTwoValue = event.target.value
        setNumB(numberTwoValue)
    }

    const inputOperation = (event) => {
        const mathOperation = event.target.value
        setOperation(mathOperation)
    }


    const calculate = () => {
        const firstNumber = numA
        const secondNumber = numB
        const mathOperation = operation
        let result = rezultat


        switch (mathOperation) {
            case '+':
                result = Number(firstNumber) + Number(secondNumber);
                break;
            case '-':
                result = Number(firstNumber) - Number(secondNumber);
                break;
            case '*':
                result = Number(firstNumber) * Number(secondNumber);
                break;
            case '/':
                result = Number(firstNumber) / Number(secondNumber);
                break;
            default:
                alert('Enter a valid math operation');
        }
        setRezultat(result)


    }

    return (
        <div>
            <h1>Functional Calculator</h1>
            <div>
                <input placeholder='First number' onChange={inputOne} />
            </div>

            <div>
                <input placeholder='Operation' onChange={inputOperation} />
            </div>

            <div>
                <input placeholder='Second number' onChange={inputTwo} />
            </div>

            <div>
                <button onClick={calculate}>Calculate!</button>
            </div>

            <div>
                Result=<span>{rezultat}</span>
            </div>
        </div>
    )

}


export default FunctionalCalculator