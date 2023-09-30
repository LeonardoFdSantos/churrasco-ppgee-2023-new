import * as React from "react";

import NavBar from '../components/navbar';

const UsuariosPage = () => {
  return (
    <main>
      <NavBar />
      <h1>Usuarios Totais</h1>
    </main>
  )
}

export default UsuariosPage

export const Head = () => <title>Usuarios</title>
