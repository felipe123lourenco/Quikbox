import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../componentes/Banner';
import NavBar from '../../componentes/NavBar';
import Rodape from '../../componentes/Rodape';
import estilos from './Home.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className={estilos.MiniBanners}>
        <img src="/imagens/transporte.png" alt="Transportes" />
        <div className={estilos.CardCentral}>
          <h2>Um único produto, várias possibilidades.</h2>
          <div>
            <p>Escolha o melhor parceiro transportador analisando custo/benefício</p>           
          </div>
        </div>
        <img src="/imagens/transporte_2.png" alt="Por todo o Brasil" />
      </div>
      <div className={estilos.Categorias}>
        <div className={estilos.TipoDePrato}>
          <img src="/imagens/cargas.png" alt="Cargas" />
          <h4>Formação de cargas</h4>
        </div>
        <div className={estilos.TipoDePrato}>
          <img src="/imagens/fretes.png" alt="Fretes" />
          <h4>Mesa de fretes</h4>
        </div>
        <div className={estilos.TipoDePrato}>
          <img src="/imagens/monitoramento.png" alt="Monitoramento" />
          <h4>Monitoramento rápido</h4>
        </div>
        <div className={estilos.TipoDePrato}>
          <img src="/imagens/montagem.png" alt="Montagem" />
          <h4>Montagem de carga</h4>
        </div>
      </div>
      
      <Rodape />
    </>
  );
}

export default App;
