import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    userInput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('') 
    // ^^ we now have an array of characters ^^ of which we want to remove one.. use splice... 

    text.splice(index, 1) // remove from array at index position, only 1 character 

    const updatedText = text.join('') // this converts array of characters back into a string.. 

    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      // we had to .split('') with empty string because cant use map as string is kind of a JS array but not really. 
      // to turn the string into a JS array we need to call split on the user input with empty string as argument... 
      return <Char 
          character={char} 
          key={index} 
          // here we pass a reference and then the finction gets executed when clicked property is fired and then we call delete char handler. (need to pass this to Char via onClick={props.clicked})
          clicked={() => this.deleteCharHandler(index)} />
    })

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
        <hr />
        <input 
            type='text' 
            onChange={this.inputChangedHandler} 
            value={this.state.userInput} /> 
            <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length}/>
            {/* rendering char list below:  */}
            {charList}
      </div> 
    );
  }
}

export default App;
