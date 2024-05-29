import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../../http"
import IEntregas from "../../../interfaces/IEntregas"

import { Link as RouterLink } from 'react-router-dom'

const AdministracaoEntregas = () => {

    const [entregas, setEntregas] = useState<IEntregas[]>([])

    useEffect(() => {
        http.get<IEntregas[]>('entregas/')
            .then(resposta => setEntregas(resposta.data))
    }, [])

    const excluir = (entregaAhSerExcluido: IEntregas) => {
        http.delete(`clientes/${entregaAhSerExcluido.id}/`)
            .then(() => {
                const listaEntregas = entregas.filter(entregas => entregas.id !== entregaAhSerExcluido.id)
                setEntregas([...listaEntregas])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Endereço
                        </TableCell>
                        <TableCell>
                            Geolocalizacao
                        </TableCell>
                        <TableCell>
                            Dimensoes
                        </TableCell>
                        <TableCell>
                            Peso
                        </TableCell>
                        <TableCell>
                            Status
                        </TableCell>
                        <TableCell>
                            Codigo de Confirmacao
                        </TableCell>
                        <TableCell>
                            Codigo de Coleta
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entregas.map(entregas => <TableRow key={entregas.id}>
                        <TableCell>
                            {entregas.endereco}
                        </TableCell>
                        <TableCell>
                            {entregas.geolocalizacao}
                        </TableCell>
                        <TableCell>
                            {entregas.dimensoes}
                        </TableCell>
                        <TableCell>
                            {entregas.peso}
                        </TableCell> 
                        <TableCell>
                            {entregas.status}
                        </TableCell>
                        <TableCell>
                            {entregas.codigo_confirmacao}
                        </TableCell>
                        <TableCell>
                            {entregas.codigo_coleta}
                        </TableCell>                                            
                        <TableCell>
                            [ <RouterLink to={`/admin/entregas/${entregas.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(entregas)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoEntregas