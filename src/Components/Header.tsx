import React from "react";
import DateRange from "./DateRange";
import Month from "./Month";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "FinTech | Resumo";
    }
    if (location.pathname === "/vendas") {
      document.title = "FinTech | Vendas";
      setTitle("Vendas");
    }
  }, [location.pathname]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Month />
    </header>
  );
};

export default Header;
