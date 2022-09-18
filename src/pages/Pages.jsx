import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';

import Home from './Home';

import Cusine from './Cusine';
import Category from '../components/Category';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import Receipe from './../components/Receipe';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { AnimatePresence } from 'framer-motion';

export default function Pages() {
 return (
  <BrowserRouter>
   <Logo>
    <GiKnifeFork />

    <LogoLink to={`/`}> Deliciozz App</LogoLink>
   </Logo>

   <Search />
   <Category />
   <AnimatePresence>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/cusine/:type' element={<Cusine />} />
     <Route path='/searchresult/:term' element={<SearchResult />} />
     <Route path='/receipe/:id' element={<Receipe />} />
    </Routes>
   </AnimatePresence>
  </BrowserRouter>
 );
}

const LogoLink = styled(Link)`
 text-decoration: none;
 font-size: 1.5rem;
 color: #313131;
 letter-spacing: 2px;

 font-family: fantasy;
`;

const Logo = styled.div`
 display: flex;
 padding: 4rem 0rem;
 justify-content: flex-start;
 align-items: center;

 svg {
  font-size: 2rem;
  margin-right: 2px;
  vertical-align: middle;
 }
`;
