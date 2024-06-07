import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import Home from './paginas/Home';
import FormularioCliente from './paginas/Clientes/FormularioCliente';
import AdministracaoClientes from './paginas/Clientes/AdministracaoClientes';
import FormularioEntregadores from './paginas/Entregadores/FormularioEntregadores';
import AdministracaoEntregadores from './paginas/Entregadores/FormularioEntregadores';
import Login from './paginas/Login/Login';

import FormularioEntregas from './paginas/Administracao/Entregas/FormularioEntregas';
import AdministracaoEntregas from './paginas/Administracao/Entregas/AdministracaoEntregas';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import DashBoardEmpresa from './paginas/Dashboard/Empresa';
import StatusDetalhe from './paginas/Dashboard/Empresa/StatusDetalhe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/clientes" element={<FormularioCliente />} />
      <Route path="/admclientes/:id" element={<AdministracaoClientes />} />
      <Route path="/entregadores" element={<FormularioEntregadores />} />
      <Route path="/admentregadores/:id" element={<AdministracaoEntregadores />} />      
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/empresa" element={<DashBoardEmpresa />} />
      <Route path="/dashboard/empresa/:status" element={<StatusDetalhe />} />
      
      <Route path='/admin' element={<PaginaBaseAdmin />}>     
        <Route path="entregas/novo" element={<FormularioEntregas />} />        
     </Route>
     
    </Routes>
  );
}

export default App;
