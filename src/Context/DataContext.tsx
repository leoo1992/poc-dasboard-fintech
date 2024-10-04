import React from "react";
import useFetch from "../Hooks/useFetch";

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw Error(
      "useData precisa do DataContextProvider em hierarquia superior"
    );
  return context;
};

function getDateDaysAgo(n: number): string {
  const date = new Date();
  date.setDate(date.getDate() - n);

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDateDaysAgo(30));
  const [final, setFinal] = React.useState(getDateDaysAgo(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, final, setInicio, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
