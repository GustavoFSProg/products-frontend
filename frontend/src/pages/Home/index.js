import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import api from '../../services/api'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function Home() {
  const [products, setProducts] = useState([])

  async function getProducts() {
    const { data } = await api.get('/')
    console.log('data:', data)

    setProducts(data)

    return data
  }

  useEffect(() => getProducts(), [])
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  })

  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Titulo do Produto</StyledTableCell>
            <StyledTableCell align="right">Descricao</StyledTableCell>
            <StyledTableCell align="right">Preco</StyledTableCell>
            <StyledTableCell align="right">Slug</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((produtos) => (
            <StyledTableRow key={produtos._id}>
              <StyledTableCell component="th" scope="row">
                {produtos.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {' '}
                {produtos.description}
              </StyledTableCell>
              <StyledTableCell align="right"> {produtos.price}</StyledTableCell>
              <StyledTableCell align="right"> {produtos.slug}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
