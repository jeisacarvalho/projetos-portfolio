import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div>
         <nav id="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie/>
            Movieslib
            </Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um filme" />
            <button type="submit">Buscar
            <BiSearchAlt2/>
            </button>
        </form>
      </nav>
    </div>

  )
}

export default Navbar