import SellItem from "../Components/SellItem";
import { useData } from "../Context/DataContext";

const VendaS = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <SellItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default VendaS;
