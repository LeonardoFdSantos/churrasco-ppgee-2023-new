import * as React from "react";

import NavBar from '../components/navbar';

const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <h1>Teste 1</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
