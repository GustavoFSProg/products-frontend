import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ButtonAppBar from '../../Material-UI/AppBar/index'
import api from '../../services/api'

const useStyles = makeStyles({
  table: {
    minWidth: 350,
    maxWidth: 400,
  },
})

// function createData(Titulo, Preco, Descricao, Slug) {
//   return { Titulo, Preco, Descricao, Slug }
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ]

export default function Home() {
  const classes = useStyles()
  const [products, setProducts] = useState([])

  async function getProducts() {
    const { data } = await api.get('/')
    console.log('data:', data)

    setProducts(data)

    return data
  }

  useEffect(() => getProducts(), [])

  return (
    <>
      <ButtonAppBar />
      <TableContainer component={Paper} />
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align="right">Slug</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((produtos) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {produtos.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {produtos.description}
              </TableCell>
              <TableCell key={produtos.price} component="th" scope="row" />
              <TableCell component="th" scope="row">
                {produtos.price}
              </TableCell>
              <TableCell component="th" scope="row">
                {produtos.slug}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
