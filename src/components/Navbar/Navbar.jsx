import { CartWidget} from "../CartWidget"
import { Link, NavLink } from "react-router-dom"
import './Navbar.scss'

const links = ["Lisos", "Estampados", "Tricolor", "Premium"];

export const Navbar = () => {
    return <header className="header">
        <div> <Link to="/"> <img src="https://i.ibb.co/YjyRd1h/logo.png" alt="Logo Denver" /> </Link> </div>
        <div className="header__nav">
            {links.map((elemento) => {
                return ( 
                    <Link 
                        className="nav__options" 
                        to={`/categoria/${elemento.toLowerCase()}`} 
                        key ={elemento}>
                        {elemento}
                    </Link>
                );
            })}
        </div>
        <CartWidget />
    </header>
}
