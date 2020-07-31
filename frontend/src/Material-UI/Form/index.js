import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Toast, { showToast } from '../Toast'
import Column from '../../components/Column'
import 'react-toastify/dist/ReactToastify.min.css'
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
  const classes = useStyles()

  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [slug, setSlug] = useState('')

  // const data = new FormData()

  // data.append('image', image)
  // data.append('author', title)
  // data.append('description', description)
  // data.append('place', price)
  // data.append('hashtags', slug)

  async function formulario(e) {
    e.preventDefault()

    const data = { image, title, description, price, slug }

    try {
      // if (title === '' || description === '' || price === '' || slug === '') {
      //   return showToast({ type: 'error', message: 'All fields are Required!' })
      // }

      const response = await api.post('/register', data)

      console.log(response)

      showToast({ type: 'success', message: 'Cadastro efetuado com sucesso!' })
      // history.push('/')
      return data
    } catch (error) {
      return { error }
    }
  }

  return (
    <>
      <br />
      <br />

      <Column justifyContent="center" size={11}>
        <h2>Cadastro de Produtos</h2>
      </Column>

      <Column justifyContent="center" size={9}>
        <form
          onSubmit={formulario}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <ul style={{ listStyle: 'none', padding: '20px' }}>
            <li style={{ padding: '6px' }}>
              {/* <input
                type="file"
                style={{ width: '150%' }}
                id="outlined-basic"
                label="Imagem"
                variant="outlined"
                onChange={(e) => e.target.files[0]}
              /> */}
            </li>
            <li style={{ padding: '6px' }}>
              <TextField
                style={{ width: '150%' }}
                id="outlined-basic"
                label="Titulo"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </li>
            <li style={{ padding: '6px' }}>
              <TextField
                style={{ width: '150%' }}
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </li>
            <li style={{ padding: '6px' }}>
              <TextField
                style={{ width: '150%' }}
                id="outlined-basic"
                label="Preço"
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </li>
            <li style={{ padding: '6px' }}>
              <TextField
                style={{ width: '150%' }}
                id="outlined-basic"
                label="Slug"
                variant="outlined"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </li>
            <li>
              <br />
              <Button
                color="primary"
                variant="contained"
                style={{ width: '150%', height: '40px' }}
                type="submit"
              >
                Cadastrar
              </Button>
            </li>
            <Toast />
          </ul>
        </form>
      </Column>
    </>
  )
}
