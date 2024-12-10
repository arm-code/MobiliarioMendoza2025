import { NavLink } from 'react-router-dom'
import { Nav } from './NavBar.styles'

export const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => (isActive ? 'active-link' : '')} // Aquí se usa `isActive` para asignar la clase activa
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/productos" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Catalogo
          </NavLink>
        </li>
              
      </ul>
      <hr />
    </Nav>
  )
}
