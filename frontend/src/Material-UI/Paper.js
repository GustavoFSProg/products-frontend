import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    //display: 'flex',
    // flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3),
      // width: theme.spacing(216),
      // margin: '200px',
      width: '50%',
      height: theme.spacing(116),
      background: 'lightgrey',
      color: 'black',
      justifyContent: 'center',
    },
  },
}))

export default function SimplePaper() {
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
    <div align="center" className={classes.root}>
      <Paper>
        <ul style={{ padding: '30px', listStyle: 'none' }}>
          {products.map((produtos) => (
            <li key={produtos.id}>
              <strong style={{ color: 'green' }}>Produto</strong>
              <p>{produtos.title}</p>
              <strong style={{ color: 'green' }}>Descrição</strong>
              <p>{produtos.description}</p>
              <strong style={{ color: 'green' }}>Preço</strong>
              <p>{produtos.price}</p>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  )
}
