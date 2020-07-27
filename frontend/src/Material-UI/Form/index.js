import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import api from '../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}))

export default function Form() {
  const history = useHistory()
  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')

  async function formulario(e) {
    e.preventDefault()

    const data = { title, description, price, slug }

    try {
      await api.post('/register', data)

      alert('Produto Cadastrado com sucesso!')

      history.push('/')
      return data
    } catch (error) {
      return { error }
    }
  }

  return (
    <div align="center" style={{ width: '100%' }}>
      <br />
      <br />
      <div align="center">
        <h2>Cadastro de Produtos</h2>
      </div>
      <form
        onSubmit={formulario}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <ul style={{ listStyle: 'none', padding: '20px', width: '1200px' }}>
          <li style={{ padding: '6px' }}>
            <TextField
              style={{ width: '40%' }}
              id="outlined-basic"
              label="Titulo"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li style={{ padding: '6px' }}>
            <TextField
              style={{ width: '40%' }}
              id="outlined-basic"
              label="Descrição"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li style={{ padding: '6px' }}>
            <TextField
              style={{ width: '40%' }}
              id="outlined-basic"
              label="Preço"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </li>
          <li style={{ padding: '6px' }}>
            <TextField
              style={{ width: '40%' }}
              id="outlined-basic"
              label="Slug"
              variant="outlined"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </li>
        </ul>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
