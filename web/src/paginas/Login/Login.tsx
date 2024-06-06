import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../http";
import ILogin from "../../interfaces/ILogin";
import React from 'react';
import NavBar from '../../componentes/NavBar';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')   

    const navigate = useNavigate();

     const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        navigate('/dashboard/empresa');
        // const form = evento.currentTarget;
        // const formData = new FormData();
        // const data: any = {};

        // http.request({
        //     url: 'http://localhost:3000/login/criar',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },

        //     data: JSON.stringify(data)
        // })
        //     .then(() => {                                
        //         setEmail('')
        //         setSenha('')                
        //     })
        //     .catch(erro => console.log(erro))
    }

    return (    
        <>
        <NavBar />
        <Banner />
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Clientes</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <TextField
                    value={email}
                    onChange={evento => setEmail(evento.target.value)}
                    label="Login"
                    variant="standard"
                    fullWidth
                    // required
                    margin="dense"
                    name="login"
                />
                <TextField
                    value={senha}
                    onChange={evento => setSenha(evento.target.value)}
                    label="Senha"
                    variant="standard"
                    fullWidth
                    // required
                    margin="dense"
                    name="senha"
                />              
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Logar</Button>
            </Box>
        </Box> 
        <Rodape />
        </>             
    )
}
export default Login