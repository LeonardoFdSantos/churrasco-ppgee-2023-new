import * as React from "react"

import Thermometer from 'react-thermometer-component';
import axios from 'axios';
import NavBar from '../components/navbar';

import { Box, Divider, Grid, GridItem, Text, Center, Flex, Spacer } from '@chakra-ui/react';
import { Heading, Stack, CardBody, Card} from '@chakra-ui/react'

import { useEffect, useState } from 'react';

const baseURL = "https://api.steinhq.com/v1/storages/651605b561eb47055da02529/Administracao";

const PagamentosPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(baseURL).then((response) => {
        setData(response.data);
      });
    };
    
    fetchData();

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 2 minutes
    }, 600000);

    return () => clearInterval(intervalId);

  }, []);

  if (!data) return null;

  return (
    <main>
      <Box w='100%'>
      <NavBar />
      <Divider />
      <Card>
        <Stack>
          <CardBody>
            <Heading size='md' fontSize='4xl'>Pagamentos</Heading>

            <Text py='2' fontSize='2xl'>
              Pagamentos Realizados pelos professores até o momento!
            </Text>
            <Text py='2' fontSize='2xl'>
              Nossa meta é alcançar 70% dos pagantes de cada Grupo.
            </Text>
          </CardBody>
        </Stack>
      </Card>
      <Divider />
      <Card w='100%'>
        <Center >
          {data.map((item) => (
            <Box>
            <Heading size='md' fontSize='3xl'>{item.Grupo}</Heading>
            <Spacer height='60px'/>
              <GridItem width='350px' >
                  <Thermometer
                      theme="light"
                      value={(parseFloat(item.quantidade_atual)/parseFloat(item.quantidade_maxima))*100}
                      max="100"
                      steps="10"
                      format="%"
                      size="small"
                      height="300"
                  />
              </GridItem>
            </Box>
          ))}
        </Center>
      </Card>
      </Box>
    </main>
  )
  }
  export default PagamentosPage

export const Head = () => <title>Pagamentos</title>