import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<nav className={estilos.Link}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/clientes">Cadastro de Clientes</Link>
      </li>
      <li>
        <Link to="/entregadores">Cadastro de Entregadores</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>)
}

export default NavBar