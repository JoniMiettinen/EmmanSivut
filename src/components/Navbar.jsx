import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-20 rounded-xl bg-white items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">Oisko tähän joku logo?</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-500' : 'text-black'}>
                Etusivu
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-gray-500' : 'text-black'}>
                Tietoa
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-gray-500' : 'text-black'}>
                Yhteystiedot
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar