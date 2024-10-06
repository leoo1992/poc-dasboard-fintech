import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import Resumo from "./Pages/Resumo";
import VendaS from "./Pages/VendaS";
import Venda from "./Pages/Venda";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";
import React from "react";

function App() {
  React.useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        /Support for defaultProps will be removed from function components/.test(
          args[0]
        )
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <DataContextProvider>
      <BrowserRouter>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="*" element={<>404</>} />
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<VendaS />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;
