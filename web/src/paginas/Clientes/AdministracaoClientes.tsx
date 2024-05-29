import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import IClientes from "../../interfaces/IClientes"

import { Link as RouterLink } from 'react-router-dom'

const AdministracaoClientes = () => {

    const [clientes, setClientes] = useState<IClientes[]>([])

    useEffect(() => {
        http.get<IClientes[]>('clientes/')
            .then(resposta => setClientes(resposta.data))
    }, [])

    const excluir = (clientesAhSerExcluido: IClientes) => {
        http.delete(`clientes/${clientesAhSerExcluido.id}/`)
            .then(() => {
                const listaClientes = clientes.filter(clientes => clientes.id !== clientesAhSerExcluido.id)
                setClientes([...listaClientes])
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
                            CNPJ
                        </TableCell>
                        <TableCell>
                            Endereço
                        </TableCell>
                        <TableCell>
                            Coordenadas
                        </TableCell>
                        <TableCell>
                            e-mail
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
                    {clientes.map(clientes => <TableRow key={clientes.id}>
                        <TableCell>
                            {clientes.nome}
                        </TableCell>
                        <TableCell>
                            {clientes.cnpj}
                        </TableCell>
                        <TableCell>
                            {clientes.endereco}
                        </TableCell>
                        <TableCell>
                            {clientes.coordenadas}
                        </TableCell> 
                        <TableCell>
                            {clientes.email}
                        </TableCell>                      
                        <TableCell>
                            [ <RouterLink to={`/clientes/${clientes.id}`}>editar</RouterLink> ]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(clientes)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoClientes