import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

import { Wrapper, Card, Gardient } from './styledComponents';

function Vaggie() {
 const [Vaggie, setVaggie] = useState([]);

 const getVaggie = async () => {
  const check = localStorage.getItem('vaggieStroage');
  if (check) {
   setVaggie(JSON.parse(check));
  } else {
   const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
   );
   const data = await api.json();
   console.log('getting from vaggie api');
   localStorage.setItem('vaggieStroage', JSON.stringify(data.recipes));
   setVaggie(data.recipes);
  }
 };

 useEffect(() => {
  getVaggie();
 }, []);

 return (
  <>
   <Wrapper>
    <h3>Our vegetrina picks :</h3>
    <Splide
     options={{
      perPage: 3,
      gap: '1.5rem',
      arrows: true,
      drag: 'free',
      pagination: false,
     }}>
     {Vaggie.map((recipe) => (
      <SplideSlide key={recipe.id}>
       <Card>
        <Link to={`/receipe/${recipe.id}`}>
         <p>{recipe.title}</p>
         <img src={recipe.image} alt={recipe.title} />
         <Gardient />
        </Link>
       </Card>
      </SplideSlide>
     ))}
    </Splide>
   </Wrapper>
  </>
 );
}
export default Vaggie;
