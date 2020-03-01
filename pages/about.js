import Link from 'next/link';
import React, { Component } from 'react';
import { useRouter } from "next/router";


import PokemonList from '../comps/pokemon/PokemonList';





class App extends Component {
  render() {
    return (
     
        
          
          <div className="container">
          
            <div className="col">
          <PokemonList />
        </div>
           
          </div>
       
    
    );
  }
}

export default App;

