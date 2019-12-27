import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = { 
    currentText: '',
    currentLenght: 0,
    listOfChars: []
  }

  handleChange = (event) => {
    this.setState({ 
      currentText: event.target.value,
      currentLenght: event.target.value.length
    });
    const lastEnteredCharacter = event.target.value.slice(-1).toLocaleLowerCase();
    const index = this.state.listOfChars.findIndex(x => x.toLocaleLowerCase() === lastEnteredCharacter);
    if (index === -1) {
      const currentChars = [...this.state.listOfChars, lastEnteredCharacter];
      this.setState({ listOfChars: currentChars });
    };
  }

  handleRemove = (character) => {
    // Remove from array
    const currenctChars = [...this.state.listOfChars];
    const filteredItems = currenctChars.filter(x => x !== character);
    this.setState({ listOfChars: filteredItems });

    // Remove from input
    const currentInput = this.state.currentText;
    const filteredInput = currentInput.split(character).join('');
    this.setState({ 
      currentText: filteredInput,
      currentLenght: filteredInput.length
    });
  }

  render() {
    let chars = null;
    chars = (
      <div>
        {this.state.listOfChars.map((c) => {
          return <CharComponent char={c} click={() => this.handleRemove(c)}/>
        })}
      </div>     
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type="text" onChange={this.handleChange} value={this.state.currentText} />
        <p>{this.state.currentLenght}</p>
        <ValidationComponent currentLenght={this.state.currentLenght} />
        {chars}
      </div>
    );
  }
}

export default App;
