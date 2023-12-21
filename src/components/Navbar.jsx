import { CartWidget } from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex justify-between items-center text-gray-700 bg-white h-20">
      <a className="p-4 text-xl" href="/">E-Commerce</a>
      <ul className="flex mr-4">
        <li className="p-4 hover:text-red-400">
          <a href="/">Inicio</a>
        </li>
        <li className="p-4 hover:text-red-400">
          <a href="/productos">Productos</a>
        </li>
        <li className="p-4 hover:text-red-400">
          <a href="/contacto">Contacto</a>
        </li>
        
        <li className="p-4 ml-10 hover:text-red-400 cursor-pointer">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
