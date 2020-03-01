import { useRouter } from "next/router";

import SearchBar from '../comps/SearchBar';
import Layout from '../comps/MyLayout';
import axios from 'axios';
import Link from 'next/link';
const layoutStyle = {
  
  margin: 20,
  padding: 40,
  border: '20px solid #FFCC00',

};




const Post =({props, pokemon})  => {
const router = useRouter();

console.log(router)

    return (
      <div>
      <Link href="/index"><a>Home   </a></Link>
<Link href="/about">
<a>About </a>
</Link>
<Link href="/pokemon/[number]"><a>Number </a></Link>
<br></br>
<h1>POKEDEX</h1>
<SearchBar />
<div style={layoutStyle}>
   
     <h1>{pokemon.name}</h1>

     
            {pokemon.map((pokeman, i) => {
                return (
                    <p>
                    <Link href={`/pokemon/${i + 1}`}>
                      <a 
            style={{
              backgroundColor: 'white transparent',
              height: '1.2em',
              width: '35%',
              borderRadius: '15px',
              color: 'Black',
              opacity: '0.8',
              fontFamily: 'Arial',
              
              fontSize: '2em',
              marginRight: '.5em',
            }}>
                        {i + 1} {pokeman.name}
                      </a>
                    </Link>
                    </p>
                );
            })}
           </div></div>
    )
}

Post.getInitialProps = async function(context){

    
    const pokemon = await axios
    .get('http://pokeapi.co/api/v2/pokemon?limit=964')
    .then(response => response.data.results);
    
    return { pokemon };
}

export  default Post;