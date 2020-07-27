import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'

export default function Router() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
    </>
  )
}
