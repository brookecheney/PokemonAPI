
import { useRouter } from "next/router";
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
const layoutStyle = {
    
    margin: 50,
    padding: 30,
    border: '20px solid #FFCC00',
  
};




const pokemon = ({ pokemon }) => {
    const router = useRouter();
    console.log(router)
    return (
        <div>
                 <Link href="/index"><a>Home   </a></Link>
      <Link href="/about">
        <a>About </a>
      </Link>
      <Link href="/pokemon/[number]"><a>Number </a></Link>
    
        
   
        <div style={layoutStyle}>
     
            <h1>{pokemon.name}</h1>
            <img src = {pokemon.sprites.front_default} style={{ height: 340 }} />
        
            <h3>Name " {pokemon.name} "</h3>
            <h3>Height: {pokemon.height} inches</h3>
            <h3>Weight: {pokemon.weight} lbs</h3>
            <h3>Type: {pokemon.id} defense</h3>
            <h3>Attack Rate: {pokemon.base_experience} mph</h3>
            
          
         
            
            </div>
        </div>
    );
};

pokemon.getInitialProps = async ({ query }) => {
    const number = query.number;


    const pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.data);
    return { pokemon };
}

export default pokemon;