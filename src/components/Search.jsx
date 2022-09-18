import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Search() {
 const [input, setInput] = useState('');
 const navigate = useNavigate();

 const submitHanlder = (e) => {
  e.preventDefault();
  navigate('./searchresult/' + input);
 };

 return (
  <Form onSubmit={submitHanlder}>
   <input
    type='text'
    value={input}
    onChange={(e) => setInput(e.target.value)}
   />
   <BiSearch />
  </Form>
 );
}
const Form = styled.form`
 display: flex;
 width: 100%;
 position: relative;
 max-width: 500px;
 margin: 0 auto 3rem;
 transition: all 0.4s;
 &:hover {
  max-width: 80%;
 }
 input {
  width: 100%;
  background: linear-gradient(45deg, #313133, #171717);
  border: none;
  padding: 1rem 2rem;
  outline: none;
  border-radius: 5rem;
  color: #fff;
  font-size: 1.2rem;
  box-shadow: 1rem 1rem 1.5rem rgba(0, 0, 0, 0.5);
 }
 svg {
  position: absolute;

  fill: #fff;
  top: 50%;
  right: 20px;
  transform: translate(0%, -50%) scale(1.5);
 }
`;
