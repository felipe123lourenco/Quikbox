import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../../../componentes/NavBar';
import Rodape from '../../../componentes/Rodape';
import IEntregas from '../../../interfaces/IEntregas';

const StatusDetalhe = () => {
  const { status } = useParams<{ status: string }>();
  const [entregas, setEntregas] = useState<IEntregas[]>([]);

  useEffect(() => {
    axios.get<IEntregas[]>(`http://localhost:3000/entregas/dashboard/empresa/listar?status=${status}`)
      .then(response => {
        console.log(response.data);
        setEntregas(response.data);
      });
  }, [status]);

  return (
    <>
      <NavBar />
      <h2>Status: {status}</h2>
      <div>
        {entregas.map(entrega => (
          <div key={entrega.id}>
            <p>{`(ID: ${entrega.id}) ${entrega.logradouro}, Nº ${entrega.numero}, Bairro: ${entrega.bairro} `}</p>
          </div>
        ))}
      </div>
      <Rodape />
    </>
  );
};

export default StatusDetalhe;
