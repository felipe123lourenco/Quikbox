import { useEffect, useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "../../../componentes/NavBar";
import Rodape from "../../../componentes/Rodape";
import axios from 'axios';
import IStatusEntregaGrupo from "../../../interfaces/IStatusEntregaGrupo";
import '../index.css';

const DashBoardEmpresa = () => {
    const [grupoEntregas, setGrupoEntregas] = useState<IStatusEntregaGrupo[]>([]);
    
    useEffect(() => {
        axios.get<IStatusEntregaGrupo[]>('http://localhost:3000/entregas/listar/status')
        .then((response) => {
            setGrupoEntregas(response.data);
        });
    }, []);

    return ( 
        <div id="root">
            <NavBar />
            <div className="main-content">
                <h2>Dashboard</h2>
                <div className="groupStatusContainer">
                    {grupoEntregas?.map(item => (
                        <Link key={item.status} to={"/dashboard/empresa/" + item.status}>
                            <div className='groupStatusBlock'>
                                <div className="groupStatusInner">
                                    <div className='groupStatusNome'>{item.status}</div>
                                    <div className='groupStatusCount'>{item.totstatus}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Rodape />    
        </div>  
    );
};

export default DashBoardEmpresa;
