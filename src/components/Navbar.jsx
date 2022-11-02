import { CartWidget} from "./CartWidget"

export const Navbar = () => {
    return <header className="header">
        <div> <a href="../index.js"> <img src="././img/logo.png" alt="Logo Denver" /> </a> </div>
        <div className="header__nav">
            <ul>
                <li>Productos</li>
                <li>Medios de pago</li>
                <li>Contacto</li>
            </ul>
        </div>
        <CartWidget />
    </header>
}