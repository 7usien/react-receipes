import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Cusine() {
 const [cusine, setCusine] = useState([]);
 const [loading, setIsloading] = useState(false);
 let params = useParams();

 const getCusine = async (name) => {
  setIsloading(true);
  const res = await fetch(
   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
  );
  const data = await res.json();
  setCusine(data.results);
  setIsloading(false);
 };

 useEffect(() => {
  getCusine(params.type);
 }, [params.type]);

 return (
  <>
   {loading && <Loading>waiting loading data ..</Loading>}
   <Grid
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7 }}>
    {cusine &&
     cusine.map((ele) => (
      <Card key={ele.id}>
       <Link to={`/receipe/${ele.id}`}>
        <img src={ele.image} alt={ele.title} />
        <h4>{ele.title}</h4>
       </Link>
      </Card>
     ))}
   </Grid>
  </>
 );
}

const Grid = styled(motion.div)`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
 grid-gap: 3rem;
`;

const Card = styled.div`
 img {
  width: 100%;
  border-radius: 2rem;
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

export default Cusine;
