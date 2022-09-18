import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SplideSlide, Splide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Wrapper, Card, Gardient } from './styledComponents';

function Popular() {
 const [popular, setPopluar] = useState([]);

 const getPopular = async () => {
  const check = localStorage.getItem('popularStorage');
  if (check) {
   setPopluar(JSON.parse(check));
  } else {
   const api = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
   );
   const data = await api.json();
   console.log('getting from api');
   localStorage.setItem('popularStorage', JSON.stringify(data.recipes));
   setPopluar(data.recipes);
  }
 };

 useEffect(() => {
  getPopular();
 }, []);

 return (
  <>
   <Wrapper>
    <h3>popular picks:</h3>
    <Splide
     options={{
      perPage: 4,
      gap: '2rem',
      arrows: true,
      drag: 'free',
      pagination: false,
     }}>
     {popular.map((recipe) => (
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

export default Popular;
