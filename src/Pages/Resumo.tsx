import { useData } from "../Context/DataContext";

const Resumo = () => {
  const { data } = useData();

  if (data === null) return null;

  const calcularTotal = (status: string | null) =>
    data
      .filter((item) =>
        status ? item.status === status : item.status !== "falha"
      )
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section>
      <div className="resumo flex mb">
        {[
          { titulo: "Vendas", status: null },
          { titulo: "Recebido", status: "pago" },
          { titulo: "Processando", status: "processando" },
        ].map(({ titulo, status }) => (
          <div className="box" key={titulo}>
            <h2>{titulo}</h2>
            <span>{calcularTotal(status)}</span>
          </div>
        ))}
      </div>
      <div className="box mb">
Graficos
      </div>
    </section>
  );
};

export default Resumo;
