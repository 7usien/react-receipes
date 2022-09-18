import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

export default function Receipe() {
 let params = useParams();
 let myId = params.id;

 const [receipe, setReceipe] = useState({});

 const getRecipe = async (receipeID) => {
  const api = await fetch(
   `https://api.spoonacular.com/recipes/${receipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const data = await api.json();
  setReceipe(data);
 };
 const [activeTab, setActiveTab] = useState('instructions');

 useEffect(() => {
  getRecipe(myId);
 }, [myId]);

 return (
  <>
   <h2>{receipe.title}</h2>

   <ReceipeWrapper>
    <img src={receipe.image} alt={receipe.title} />

    <Info>
     <Button
      className={activeTab === 'instructions' ? 'active' : ''}
      onClick={() => setActiveTab('instructions')}>
      instructions
     </Button>
     <Button
      className={activeTab === 'ingridents' ? 'active' : ''}
      onClick={() => setActiveTab('ingridents')}>
      ingridents
     </Button>
    </Info>

    {activeTab === 'instructions' && (
     <>
      <p dangerouslySetInnerHTML={{ __html: receipe.instructions }} />
      <p dangerouslySetInnerHTML={{ __html: receipe.summary }} />
     </>
    )}
    {activeTab === 'ingridents' && (
     <ol>
      {receipe.extendedIngredients &&
       receipe.extendedIngredients.map((ele) => (
        <li key={ele.id}>{ele.original}</li>
       ))}
     </ol>
    )}
   </ReceipeWrapper>
  </>
 );
}

const ReceipeWrapper = styled.div`
 margin-top: 2rem;
 margin-bottom: 5rem;
 display: flex;
 flex-direction: column;

 img {
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  margin-bottom: 3rem;
  object-fit: cover;
  box-shadow: 0.5rem 0.7rem 1rem rgba(0, 0, 0, 0.3);
 }

 .active {
  background: linear-gradient(45deg, #494949, #484848);
  color: #fff;
  border: none;
 }

 h2 {
  margin-bottom: 2rem;
  font-size: 1rem;
 }
 li {
  font-size: 1.2rem;
  line-height: 2.5rem;
 }
 ol {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
 }

 p {
  font-family: inherit;
  line-height: 2;

  a {
   color: #484848;
  }
 }
`;

const Button = styled.button`
 padding: 1rem 2rem;
 color: #313131;
 background-color: #fff;
 border: 2px solid #000;
 font-weight: 600;
 margin-right: 2rem;
 cursor: pointer;
`;

const Info = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-bottom: 2rem;
`;
