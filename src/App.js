import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class  App extends Component{
  constructor(){
    super();
    this.state ={
      usuarios: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({usuarios:users}));
  }

  render(){
    const { usuarios, searchField } = this.state;
    const filteredUsuarios = usuarios.filter(usuario => 
      usuario.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1>RoboHash Users</h1>
        <SearchBox 
          placeholder='Search users'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList usuarios={filteredUsuarios}/>
        
      </div>
    )
  }
}

export default App;
