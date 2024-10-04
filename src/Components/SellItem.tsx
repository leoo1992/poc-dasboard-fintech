import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";

const SellItem = ({ venda }: { venda: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink style={{ fontFamily: "monospace" }} to={`/vendas/${venda.id}`}>
        Ver
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SellItem;
