import React from 'react'

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      initialResult: 0,
      numOne: "",
      numTwo: "",
      mathOperation: "",
    };
  }
  inputOne = (event) => {
    const numOneValue = event.target.value;
    this.setState({ numOne: numOneValue });
  };
  inputTwo = (event) => {
    const numTwoValue = event.target.value;
    this.setState({ numTwo: numTwoValue });
  };
  inputOperation = (event) => {
    const operation = event.target.value;
    this.setState({ mathOperation: operation });
  };
  calculate = () => {
    const numberOne = this.state.numOne;
    const numberTwo = this.state.numTwo;
    const operation = this.state.mathOperation.toLowerCase();
    let result = 0

    switch (operation) {
      case '*':
        result = Number(numberOne) * Number(numberTwo);
        break;
      case '/':
        result = Number(numberOne) / Number(numberTwo);
        break;
      case '+':
        result = Number(numberOne) + Number(numberTwo);
        break
      case '-':
        result = Number(numberOne) - Number(numberTwo);
        break;
      default:
        alert('Enter a valid operation');
    }
    this.setState({ initialResult: result })
  };

  render() {
    return (
      <div>
        <h1>Calculator with CLASS Component</h1>
        <div>
          <input placeholder='First number' onChange={this.inputOne} />
        </div>

        <div>
          <input placeholder='Operation' onChange={this.inputOperation} />
        </div>

        <div>
          <input placeholder='Second number' onChange={this.inputTwo} />
        </div>

        <div>
          <button onClick={this.calculate}>Calculate!</button>
        </div>

        <div>
          Result=<span>{this.state.initialResult}</span>
        </div>
      </div>
    )
  }
}

export default Calculator;