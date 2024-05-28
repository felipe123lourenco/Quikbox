import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import IEntregadores from "../../interfaces/IEntregadores"

import { Link as RouterLink } from 'react-router-dom'

const AdministracaoEntregadores = () => {

    const [entregarodes, setEntregadores] = useState<IEntregadores[]>([])

    useEffect(() => {
        http.get<IEntregadores[]>('entregadores/')
            .then(resposta => setEntregadores(resposta.data))
    }, [])

    const excluir = (EntregadoresAhSerExcluido: IEntregadores) => {
        http.delete(`entregadores/${EntregadoresAhSerExcluido.id}/`)
            .then(() => {
                const listaEntregadores = entregarodes.filter(entregarodes => entregarodes.id !== EntregadoresAhSerExcluido.id)
                setEntregadores([...listaEntregadores])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            CNH
                        </TableCell>
                        <TableCell>
                            Endereço
                        </TableCell>                       
                        <TableCell>
                            e-mail
                        </TableCell>
                        <TableCell>
                            senha
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entregarodes.map(entregarodes => <TableRow key={entregarodes.id}>
                        <TableCell>
                            {entregarodes.nome}
                        </TableCell>
                        <TableCell>
                            {entregarodes.cnh}
                        </TableCell>
                        <TableCell>
                            {entregarodes.endereco}
                        </TableCell>
                        <TableCell>
                            {entregarodes.email}
                        </TableCell> 
                        <TableCell>
                            {entregarodes.senha}
                        </TableCell>                      
                        <TableCell>
                            [ <RouterLink to={`/admin/pratos/${entregarodes.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(entregarodes)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoEntregadores