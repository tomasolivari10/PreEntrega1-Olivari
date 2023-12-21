import { CartWidget } from "./CartWidget";

function Navbar() {
  return (
    <nav className="flex justify-between">
      <a className="p-4 text-xl hover:text-white " href="/">Logo</a>
      <ul className="flex mr-4">
        <li className="p-4  hover:text-white">
          <a href="/">Inicio</a>
        </li>
        <li className="p-4 hover:text-white">
          <a href="/productos">Productos</a>
        </li>
        <li className="p-4 hover:text-white">
          <a href="/contacto">Contacto</a>
        </li>
        
        <li className="p-4 ml-10 text-white cursor-pointer">
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
