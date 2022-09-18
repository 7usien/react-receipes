import { NavLink } from 'react-router-dom';
import { FaPizzaSlice, FaHamburger, FaHome } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { List } from './styledComponents';

function Category() {
 return (
  <>
   <nav>
    <List>
     <li>
      <NavLink end to={'/'}>
       <FaHome />
       Home
      </NavLink>
     </li>

     <li>
      <NavLink to={'/cusine/Italian'}>
       <FaPizzaSlice /> italian
      </NavLink>
     </li>
     <li>
      <NavLink to={'/cusine/american'}>
       <FaHamburger />
       Americaln
      </NavLink>
     </li>
     <li>
      <NavLink to={'/cusine/thai'}>
       <GiNoodles />
       Thai
      </NavLink>
     </li>
     <li>
      <NavLink to={'/cusine/korean'}>
       <GiChopsticks />
       korean
      </NavLink>
     </li>
    </List>
   </nav>
  </>
 );
}

export default Category;
