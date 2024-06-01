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

        const form = evento.currentTarget;
        const formData = new FormData();
        const data: any = {};

        const inputs: NodeListOf<HTMLInputElement> = form.querySelectorAll('input');

        inputs.forEach(e => {
            formData.append(e.name, e.value)
            data[e.name] = e.value.toString();
        });

        data['cpf'] = '12345678901';
        
        // formData.append('cnh', cnh)
        // formData.append('endereco', endereco)      
        // formData.append('email', email)
        // formData.append('senha', senha)
     
        http.request({
            url: 'http://localhost:3000/entregadores/criar',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
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
                    label="Nome do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="nome"
                />
                <TextField
                    value={cnh}                    
                    label="CNH do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="cnh"
                    type="number"
                />
                <TextField
                    value={endereco}                    
                    label="Endereço do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="endereco"
                />
                <TextField
                    value={email}                    
                    label="Email do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="email"
                />  

                 <TextField
                    value={senha}
                    label="Senha do Entregador"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="senha"
                />                                   

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
        <Rodape />    
        </>  
                
    )
}

export default FormularioEntregadores