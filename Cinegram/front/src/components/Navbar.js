import {NavLink} from 'react-router-dom';

import './Navbar.css';

const Navbar = () =>{
    return(
        <nav>
            <NavLink
                className={({isActive}) => (isActive ? "active" : undefined)}
                to="/">
                Home   
            </NavLink>

            <NavLink
                className={({isActive}) => (isActive ? "active" : undefined)}
                to="/filme">
                Filme    
            </NavLink>

            <NavLink
                className={({isActive}) => (isActive ? "active" : undefined)}
                to="/adicionar">
                Adicionar
            </NavLink>

            <NavLink
                className={({isActive}) => (isActive ? "active" : undefined)}
                to="/remover">
                Remover   
            </NavLink>
        </nav>
    );
};

export default Navbar;