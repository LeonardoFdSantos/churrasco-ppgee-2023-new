'use client';
import NavBar from '../components/navbar';

import { Box, Flex } from '@chakra-ui/react';
import Thermometer from 'react-thermometer-component';
import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "https://api.steinhq.com/v1/storages/651605b561eb47055da02529/Administracao";

function PageThermometer( ) {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      setLoading(false);
      console.log(response.data);
      });
  }, [])

  if (isLoading) return (
    <main>
      {console.log(data)}
      <NavBar />
      <p>Failed to load</p>
    </main>
  )
  if (!data) return(
    <main>
      {console.log(data)}
      <NavBar />
      <p>Loading...</p>
    </main>
  )

  return (
    <main>
      <NavBar />
      <h1>Thermometer</h1>
      <Box>
        <Flex>
          <h2>Pagamentos</h2>
          <p>Pagamentos realizados por professores para o Churrasco do PPGEE 2023</p>
          {data.map((item, i) => (
            <div key={i}>
              <h3><span />{item.Grupo}</h3>
              <Thermometer
                  theme="light"
                  value={(parseFloat(item.quantidade_atual)/parseFloat(item.quantidade_maxima))*100}
                  max="100"
                  steps="10"
                  format="%"
                  size="large"
                  height="300"
              />
            </div>
          ))}
        </Flex>
      </Box>
    </main>
  )
}
export default PageThermometer