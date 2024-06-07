import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../../componentes/NavBar";
import Rodape from "../../../componentes/Rodape";
import axios from 'axios';
import IStatusEntregaGrupo from "../../../interfaces/IStatusEntregaGrupo";
// import '../index.css';
import IEntregas from "../../../interfaces/IEntregas";

const DashBoardEntregador = () => {
    const [entregas, setEntregas] = useState<IEntregas[]>([]);
    
    useEffect(() => {
        axios.get<IEntregas[]>('http://localhost:3000/entregas/listar/entregas/entregador/1')
        .then((response) => {
            setEntregas(response.data);
        });
    }, []);

    return ( 
        <div id="root">
            <NavBar />
            <div className="main-content">
                <h2>Dashboard entregador</h2>
                <div >
                    {entregas?.map(item => (
                        <Link key={item.status} to={"/dashboard/entregador/" + item.id}>
                            <div >
                                <p >
                                    <div >{`(ID: ${item.id}) ${item.logradouro}, Nº ${item.numero}, Bairro: ${item.bairro} `}</div>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Rodape />    
        </div>  
    );
};

export default DashBoardEntregador;
