import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import IEntregadores from "../../interfaces/IEntregadores"
import React from 'react';
import NavBar from '../../componentes/NavBar';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';

const FormularioEntregadores = () => {

    const [nome, setNomeEntregador] = useState('')
    const [cnh, setCnh] = useState('')   
    const [endereco, setEndereco] = useState('')     
    const [email, setEmail] = useState('')     
    const [senha, setSenha] = useState('')  

     const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('nome', nome)
        formData.append('cnh', cnh)
        formData.append('endereco', endereco)      
        formData.append('email', email)
        formData.append('senha', senha)
     
        http.request({
            url: 'clientes/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setNomeEntregador('')
                setCnh('')
                setEndereco('')                
                setEmail('')
                setSenha('')
                alert('Entregador cadastrado com sucesso!')
            })
            .catch(erro => console.log(erro))

    }

    return ( 
        <>
        <NavBar />
        <Banner />             
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Entregadores</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <TextField
                    value={nome}
                    onChange={evento => setNomeEntregador(evento.target.value)}
                    label="Nome do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={cnh}
                    onChange={evento => setCnh(evento.target.value)}
                    label="CNH do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={endereco}
                    onChange={evento => setEndereco(evento.target.value)}
                    label="Endereço do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={email}
                    onChange={evento => setEmail(evento.target.value)}
                    label="Email do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />  

                 <TextField
                    value={senha}
                    onChange={evento => setSenha(evento.target.value)}
                    label="Senha do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />                                   

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
        <Rodape />    
        </>  
                
    )
}

export default FormularioEntregadores