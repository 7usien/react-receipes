import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

export default function SearchResult() {
 const searchTerm = useParams();
 const [result, setResult] = useState([]);
 const [isLoading, setIsLoading] = useState(false);

 const getResults = async (term) => {
  setIsLoading(true);
  const api = await fetch(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${term}`
  );
  const data = await api.json();
  setResult(data.results);
  setIsLoading(false);
 };

 useEffect(() => {
  getResults(searchTerm.term);
 }, [searchTerm.term]);

 return (
  <>
   {isLoading && <Loading>loading wait .. </Loading>}
   <Title>SearchResult for : {searchTerm.term}</Title>
   <Grid>
    {result &&
     result.map((ele) => (
      <Card key={ele.id}>
       <Link to={`/receipe/${ele.id}`}>
        <img src={ele.image} alt='' />
        <h4>{ele.title}</h4>
       </Link>
      </Card>
     ))}
   </Grid>
  </>
 );
}

const Title = styled.h3`
 font-size: 1.5rem;
 margin: 1rem 0 1.5rem;
 text-transform: capitalize;
 color: #171717;
`;

const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
 grid-gap: 3rem;
`;

const Card = styled.div`
 width: 100%;
 height: 100%;

 img {
  max-width: 100%;
  box-shadow: 0.5rem 0.7rem 1rem rgba(0, 0, 0, 0.4);
  border-radius: 2rem;
  object-fit: cover;
  outline: 2px dashed #fff;
  outline-offset: -10px;
 }
 a {
  text-decoration: none;
 }
 h4 {
  text-align: center;
  padding: 1rem;
 }
`;

const Loading = styled.div`
 text-align: center;
 color: red;
 font-size: 1.5rem;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);

 width: fit-content;
 padding: 2rem 3rem;
 background-color: #fff;
 border-radius: 1rem;
 box-shadow: 0.5rem 0.7rem 1rem rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
 text-transform: capitalize;
`;
