import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ranjitha', age: '23', id: '1' },
      { name: 'praveen', age: '25', id: '2' },
      { name: 'bhaskar', age: '25', id: '3' }
    ],
    showPerson: true
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: '23' }]
    })
  }
  nameChngedHandlr = (event, id) => {

    const personIndx = this.state.persons.findIndex(p => {
      return p.id = id;
    });

    // person = [...this.state.persons[personIndx]];
    debugger
    // person.name = event.target.value;
    // const persons = [...this.state.persons];
    // persons[personIndex] = person;
    // this.setState({
    //   persons: persons
    // })
  }
  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }
  deleteHnaldr = (event, personIndex) => {
    const persons = this.state.persons.splice();
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }
  render() {
    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              changed={(event) => this.nameChngedHandlr(event, person.id)}
              key={person.id} name={person.name} age={person.age}
              click={() => this.deleteHnaldr(index)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <p>You got this. Make it happen!</p>
        <button onClick={this.toggleNameHandler}>Swicth name</button>
        {person}
      </div>
    );
  }
  // return React.createElement('div', { className: 'App' }, React.createElement('p', null, 'Yes! Possible'));
}

export default App;
