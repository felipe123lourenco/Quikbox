import { useEffect, useState } from "react"
import React from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from "../../../componentes/NavBar";
import Rodape from "../../../componentes/Rodape";
import axios from 'axios';

const DashBoardEmpresa = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    useEffect(() => {
        axios.get<Livro[]>('http://localhost:3000/livro')
        .then((response) => {
            setLivros(response.data);
        });
    }, []) 

    return ( 
        <>
            <NavBar />
                <h2>Dashboard</h2>
            <Rodape />    
        </>  
                
    )
}

export default DashBoardEmpresa    
