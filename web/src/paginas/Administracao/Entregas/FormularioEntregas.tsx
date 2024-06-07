import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import http from "../../../http"
import React from 'react';

const FormularioEntregas = () => {

    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')

    const [clienteId, setClienteId] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [altura, setAltura] = useState('')
    const [largura, setLargura] = useState('')
    const [peso, setPeso] = useState('')
    const [status, setStatus] = useState('')
    const [codigo_confirmacao, setCodigoConfirmacao] = useState('')
    const [codigo_coleta, setCodigoColeta] = useState('')

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

        data['status'] = 'PENDENTE';

        //formData.append('endereco', endereco)
        //formData.append('latitude', latitude)
        //formData.append('longitude', longitude)
        //formData.append('altura', altura)
        //formData.append('largura', largura)
        //formData.append('peso', peso)
        //formData.append('status', status)
        //formData.append('codigo_confirmacao', codigo_confirmacao)
        //formData.append('codigo_coleta', codigo_coleta)
        console.log(data);
        http.request({
            url: 'http://localhost:3000/entregas',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
            .then(() => {
                setLogradouro('')
                setClienteId('')
                setNumero('')
                setComplemento('')
                setBairro('')
                setCidade('')
                setEstado('')
                setCep('')
                setLatitude('')
                setLongitude('')
                setAltura('')
                setLargura('')
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
                    value={clienteId}
                    label="ID do cliente"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="clienteId"
                    onChange={evento => setClienteId(evento.target.value)}
                />
                <TextField
                    value={logradouro}
                    label="Endereço"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="logradouro"
                    onChange={evento => setLogradouro(evento.target.value)}
                />
                <TextField
                    value={numero}
                    label="Número"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="numero"
                    onChange={evento => setNumero(evento.target.value)}
                />

                <TextField
                    value={complemento}
                    label="Complemento"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="complemento"
                    onChange={evento => setComplemento(evento.target.value)}
                />
                <TextField
                    value={bairro}
                    label="Bairro"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="bairro"
                    onChange={evento => setBairro(evento.target.value)}
                />
                <TextField
                    value={cidade}
                    label="Cidade"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="cidade"
                    onChange={evento => setCidade(evento.target.value)}
                />
                <TextField
                    value={estado}
                    label="Estado"
                    variant="standard"
                    inputProps={{
                        maxLength: 2,
                    }}
                    fullWidth
                    required
                    margin="dense"
                    name="estado"
                    onChange={evento => setEstado(evento.target.value)}
                />
                <TextField
                    value={cep}
                    label="CEP"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="cep"
                    onChange={evento => setCep(evento.target.value)}
                />
                <TextField
                    value={latitude}
                    label="Latitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="latitude"
                    onChange={evento => setLatitude(evento.target.value)}
                />
                <TextField
                    value={longitude}
                    label="Longitude"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="longitude"
                    onChange={evento => setLongitude(evento.target.value)}
                />
                <TextField
                    value={altura}
                    label="Altura"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="altura"
                    onChange={evento => setAltura(evento.target.value)}
                    type="number"
                />
                <TextField
                    value={largura}
                    label="Largura"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="largura"
                    onChange={evento => setLargura(evento.target.value)}
                />
                <TextField
                    value={peso}
                    label="Peso"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    type="number"
                    name="peso"
                    onChange={evento => setPeso(evento.target.value)}
                />

                <TextField
                    value={codigo_confirmacao}
                    label="Codigo de Confirmação"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="codigo_confirmacao"
                    onChange={evento => setCodigoConfirmacao(evento.target.value)}
                />
                <TextField
                    value={codigo_coleta}
                    label="Codigo de Coleta"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                    name="codigo_coleta"
                    onChange={evento => setCodigoColeta(evento.target.value)}
                />

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}
export default FormularioEntregas