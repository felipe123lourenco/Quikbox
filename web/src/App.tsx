import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import Home from './paginas/Home';
import FormularioCliente from './paginas/Clientes/FormularioCliente';
import AdministracaoClientes from './paginas/Clientes/AdministracaoClientes';
import FormularioEntregadores from './paginas/Entregadores/FormularioEntregadores';
import AdministracaoEntregadores from './paginas/Entregadores/FormularioEntregadores';

import FormularioEntregas from './paginas/Administracao/Entregas/FormularioEntregas';
import AdministracaoEntregas from './paginas/Administracao/Entregas/AdministracaoEntregas';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/clientes" element={<FormularioCliente />} />
      <Route path="/admclientes/:id" element={<AdministracaoClientes />} />
      <Route path="/entregadores" element={<FormularioEntregadores />} />
      <Route path="/admentregadores/:id" element={<AdministracaoEntregadores />} />      
      
      <Route path='/admin' element={<PaginaBaseAdmin />}>     
        <Route path="entregas/novo" element={<FormularioEntregas />} />        
     </Route>
     
    </Routes>
  );
}

export default App;
