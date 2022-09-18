import styled from 'styled-components';

const Wrapper = styled.div`
 margin: 4rem 0rem;
`;
const Card = styled.div`
 min-height: 15rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;
 img {
  border-radius: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
 p {
  position: absolute;
  bottom: 0px;
  left: 50%;
  width: 90%;
  height: 40%;
  transform: translate(-50%, 0);
  z-index: 55;
  color: #fff;

  font-size: 1.1rem;
  text-align: center;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
 }
`;

const Gardient = styled.div`
 width: 100%;
 height: 100%;
 position: absolute;
 bottom: 0;
 left: 0;
 z-index: 6;
 background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7));
`;

const List = styled.ul`
 display: flex;
 justify-content: center;
 align-items: center;
 column-gap: 1rem;
 margin: 1.5rem 0;

 li {
  list-style: none;

  a {
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: linear-gradient(45deg, #494949, #484848);
   border-radius: 50%;
   width: 6rem;

   height: 6rem;
   text-align: center;
   transform: scale(0.9);
   text-transform: capitalize;
   text-decoration: none;
   color: #fff;
   svg {
    margin: 0 auto 4px;
   }
  }
  a.active {
   background: linear-gradient(45deg, orange, orangered);
  }
 }
`;

export { Wrapper, Card, Gardient, List };
