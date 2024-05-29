import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IEntregas from "../../../interfaces/IEntregas"
import React from 'react';
import NavBar from '../../../componentes/NavBar';
import Banner from '../../../componentes/Banner';
import Rodape from '../../../componentes/Rodape';

const FormularioEntregas = () => {

    const [endereco, setEndereco] = useState('')
    const [geolocalizacao, setGeolocalizacao] = useState('')   
    const [dimensoes, setDimensoes] = useState('') 
    const [peso, setPeso] = useState('')  
    const [status, setStatus] = useState('')     
    const [codigo_confirmacao, setCodigoConfirmacao] = useState('')   
    const [codigo_coleta, setCodigoColeta] = useState('')   

     const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

        const formData = new FormData();

        formData.append('endereco', endereco)
        formData.append('geolocalizacao', geolocalizacao)
        formData.append('dimensoes', dimensoes)
        formData.append('peso', peso)
        formData.append('status', status)
        formData.append('codigo_confirmacao', codigo_confirmacao)
        formData.append('codigo_coleta', codigo_coleta)
     
        http.request({
            url: 'entregas/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        })
            .then(() => {
                setEndereco('')
                setGeolocalizacao('')
                setDimensoes('')                
                setPeso('')
                setStatus('')
                setCodigoConfirmacao('')
                setCodigoColeta('')
                alert('Entrega cadastrada com sucesso!')
            })
            .catch(erro => console.log(erro))
    }

    return (    
       
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
            <Typography component="h1" variant="h6">Formulário de Entregas</Typography>
            <Box component="form" sx={{ width: '100%' }} onSubmit={aoSubmeterForm}>
                <TextField
                    value={endereco}
                    onChange={evento => setEndereco(evento.target.value)}
                    label="Endereço"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={geolocalizacao}
                    onChange={evento => setGeolocalizacao(evento.target.value)}
                    label="Geolocalização"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={endereco}
                    onChange={evento => setDimensoes(evento.target.value)}
                    label="Dimensões"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                  <TextField
                    value={peso}
                    onChange={evento => setPeso(evento.target.value)}
                    label="Peso"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField
                    value={status}
                    onChange={evento => setStatus(evento.target.value)}
                    label="Status"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                 <TextField
                    value={codigo_confirmacao}
                    onChange={evento => setCodigoConfirmacao(evento.target.value)}
                    label="Codigo de Confirmação"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                /> 
                   <TextField
                    value={codigo_coleta}
                    onChange={evento => setCodigoColeta(evento.target.value)}
                    label="Codigo de Coleta"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />                                

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>                  
    )
}
export default FormularioEntregas