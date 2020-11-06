import './App.css';
import Person from './Components/Person/Person'
import React, { useState } from 'react';

//In FC It must be declared with const or let
const App = () => {
  // Initial state
  const state = {
    //state 1
    persons:
    [
      {name:"Antonio", age:22},
      {name:"Antoine", age:23},
      {name:"Anthony", age:24},
    ],
    //State 2
    otherState:"Some other state"
  }
  
  // Assign the initial state to currentPeron and
  // creates the function to change the state that will force to 
  // re-render de component
  const [currentPerson, setPersonState] = useState(state) 

  // Convention. Ends in Handler
  const clickMeHandler = (newName) => {
    setPersonState ({
      persons: [
        {name:newName, age:22},
        {name:"Antoine", age:23},
        {name:"Anthony", age:24}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Testing Hooks</h1>
      {/* // Function call. Use curly braces and don't end with () */}
      <button onClick={clickMeHandler.bind(this,'max')}>Click Me!</button>
      <button onClick={() => clickMeHandler('Another mode')}>Click Me 2!</button>

        {/* hardcoded */}
        <Person name="Juan" age="22"/>
        <Person name="John" age="23"/>
        <Person name="Joanne" age="24">Esta persona es especial</Person>

        {/* Sending objects properties as parameters */}
        <Person name={currentPerson.persons[0].name} age={currentPerson.persons[0].age}/>
        <Person
        name={currentPerson.persons[1].name} 
        age={currentPerson.persons[1].age}
        funtionClick={clickMeHandler.bind(this,'juan')}/>
        <Person name={currentPerson.persons[2].name} age={currentPerson.persons[2].age}>Esta persona es especial</Person>
        
        {/* Using array features */}
        {currentPerson.persons.map((num)=>{console.log("test " + num.name)})}
        {currentPerson.persons.map((num)=>  <Person name={num.name} age={num.age}/>)}

    </div>
  );
}

export default App;
