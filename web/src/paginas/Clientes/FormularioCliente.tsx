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

        const formData = new FormData();

        formData.append('nome', nomeCliente)
        formData.append('cnpj', cnpj)
        formData.append('endereco', endereco)
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)
        formData.append('email', email)
     
        http.request({
            url: 'clientes/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setNomeCliente('')
                setCnpj('')
                setEndereco('')
                setLatitude('')
                setLongitude('')  
                setEmail('')
                alert('Ciente cadastrado com sucesso!')
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
                    onChange={evento => setNomeCliente(evento.target.value)}
                    label="Nome do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={cnpj}
                    onChange={evento => setCnpj(evento.target.value)}
                    label="CNPJ do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={endereco}
                    onChange={evento => setEndereco(evento.target.value)}
                    label="Endereço do Cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                  <TextField
                    value={latitude}
                    onChange={evento => setLatitude(evento.target.value)}
                    label="Latitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={longitude}
                    onChange={evento => setLongitude(evento.target.value)}
                    label="Longitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={email}
                    onChange={evento => setEmail(evento.target.value)}
                    label="Email do Cliente"
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
export default FormularioClientes