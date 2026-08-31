import { useEffect, useState } from "react";

interface CurrencyData {
  [key: string]: number;
}

function useCurrencyInfo(currency: string): CurrencyData {
  const [data, setData] = useState<CurrencyData>({});

  
  useEffect(()=>{
    async function fetchData(){
    try{
        const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`);
        const json = await res.json();
        setData(json[currency.toLowerCase()]);
    }
    catch(error){
            console.log(error);
    }}
    fetchData();
  },[currency]);

  return data;
}

export default useCurrencyInfo;