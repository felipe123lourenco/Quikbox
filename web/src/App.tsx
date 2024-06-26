import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import Home from './paginas/Home';
import FormularioCliente from './paginas/Clientes/FormularioCliente';
import AdministracaoClientes from './paginas/Clientes/AdministracaoClientes';
import FormularioEntregadores from './paginas/Entregadores/FormularioEntregadores';
import AdministracaoEntregadores from './paginas/Entregadores/FormularioEntregadores';
import Login from './paginas/Login/Login';

import FormularioEntregas from './paginas/Administracao/Entregas/FormularioEntregas';
import DashBoardEmpresa from './paginas/Dashboard/Empresa';
import StatusDetalhe from './paginas/Dashboard/Empresa/StatusDetalhe';
import DashBoardEntregador from './paginas/Dashboard/Entregador';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clientes" element={<FormularioCliente />} />
      <Route path="/admclientes/:id" element={<AdministracaoClientes />} />
      <Route path="/entregadores" element={<FormularioEntregadores />} />
      <Route path="/admentregadores/:id" element={<AdministracaoEntregadores />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/empresa" element={<DashBoardEmpresa />} />
      <Route path="/dashboard/empresa/:status" element={<StatusDetalhe />} />
      <Route path="/dashboard/entregador/" element={<DashBoardEntregador />} />
      <Route path="/dashboard/entregador/:id" element={<Home />} />

      <Route path='/admin' element={<PaginaBaseAdmin />}>
        <Route path="entregas/novo" element={<FormularioEntregas />} />
      </Route>

    </Routes>
  );
}

export default App;
