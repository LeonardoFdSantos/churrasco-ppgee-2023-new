import * as React from "react"

import Thermometer from 'react-thermometer-component';
import axios from 'axios';

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
        <div>
        <div>
            <div>
            <h2>Pagamentos</h2>
            <p>
                Pagamentos realizados para o Churrasco do PPGEE 2023
            </p>
            </div>
            <div>
            {data.map((item)=>(
                <div>
                <h3>
                    <span/>
                    {item.Grupo}
                </h3>
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
            </div>
        </div>
        </div>
    </main>
  )
  }
  export default PagamentosPage

export const Head = () => <title>Pagamentos</title>