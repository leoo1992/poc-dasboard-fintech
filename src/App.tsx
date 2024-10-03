import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Style.css";
import Resumo from "./Pages/Resumo";
import VendaS from "./Pages/VendaS";
import Venda from "./Pages/Venda";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import { DataContextProvider } from "./Context/DataContext";

function App() {
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
