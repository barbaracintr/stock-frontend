import { createContext, useEffect, useState } from "react";

import { api } from "../data";

export const StatusContext = createContext({});

export const StatusProvider = ({ children }) => {
  const [ stocks, setStocks ] = useState([]);

  useEffect(() => {
    api
      .get("/stocks")
      .then((response) => setStocks(response.data.data))
      .then(() => status())
      .catch((err) => console.log(err));
  }, []);

  function status(a, b) {
    stocks?.map((elem) => {
      if (elem.stock_volume > a) {
        setStocks([...stocks], (elem.stock_status = "Ótimo"));
      } else if (elem.stock_volume < b) {
        setStocks([...stocks], (elem.stock_status = "Crítico"));
      } else if (elem.stock_volume > b && elem.stock_volume < a) setStocks([...stocks], (elem.stock_status = "Bom"));
    });
  }
  
  return (
    <StatusContext.Provider value={{ stocks, setStocks, status }}>
      {children}
    </StatusContext.Provider>
  );
};
