import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import ILogin from "../../interfaces/ILogin"
import React from 'react';
import NavBar from '../../componentes/NavBar';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';

const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')   

     const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('email', email)
        formData.append('senha', email)
     
        http.request({
            url: 'login/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {                                
                setEmail('')
                setSenha('')                
            })
            .catch(erro => console.log(erro))
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
                    required
                    margin="dense"
                />
                <TextField
                    value={senha}
                    onChange={evento => setSenha(evento.target.value)}
                    label="Senha"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />              
                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Logar</Button>
            </Box>
        </Box> 
        <Rodape />
        </>             
    )
}
export default Login