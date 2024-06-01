import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import IClientes from "../../interfaces/IClientes"
import React from 'react';
import NavBar from '../../componentes/NavBar';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';

const FormularioClientes = () => {

    const [nomeCliente, setNomeCliente] = useState('')
    const [cnpj, setCnpj] = useState('')   
    const [endereco, setEndereco] = useState('') 
    const [latitude, setLatitude] = useState('')   
    const [longitude, setLongitude] = useState('')   
    const [email, setEmail] = useState('')     

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

        //formData.append('nome', nomeCliente)
        //formData.append('cnpj', cnpj)
        //formData.append('endereco', endereco)
        //formData.append('latitude', latitude)
        //formData.append('longitude', longitude)
        //formData.append('email', email)
     
        http.request({
            url: 'http://localhost:3000/clientes/criar',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
            .then(() => {
                setNomeCliente('')
                setCnpj('')
                setEndereco('')
                setLatitude('')
                setLongitude('')  
                setEmail('')
                alert('Cliente cadastrado com sucesso!')
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
                    value={nomeCliente}                    
                    label="Nome do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={cnpj}                    
                    label="CNPJ do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"  
                    name="cnpj"                  
                />
                <TextField
                    value={endereco}                    
                    label="Endereço do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="endereco"
                />
                  <TextField
                    value={latitude}                    
                    label="Latitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="latitude"
                />
                <TextField
                    value={longitude}                    
                    label="Longitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="longitude"
                />
                <TextField
                    value={email}                    
                    label="Email do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="email"
                />                              

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box> 
        <Rodape />
        </>             
    )
}
export default FormularioClientes