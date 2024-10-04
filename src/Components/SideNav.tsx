import { NavLink } from "react-router-dom";
import resumoICON from "../assets/icons/resumo.svg";
import vendasICON from "../assets/icons/vendas.svg";
import FintechSVG from "../assets/FintechSVG";

const SideNav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Logo" />
      <ul>
        <li>
          <span>
            <img src={resumoICON} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendasICON} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
