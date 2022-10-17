import { TableRow } from "./styles"

export const ListStock = ({ value }) => {
  const date = new Date(Date.parse(value.stock_date));
  const result = date.getDay() + '/'+ date.getMonth() + '/'+ date.getFullYear();
  return (
    <TableRow>
      <td>{result}</td>
      <td>{value.stock_open}</td>
      <td>{value.stock_high}</td>
      <td>{value.stock_low}</td>
      <td>{value.stock_close}</td>
      <td>{value.stock_volume}</td>
      <td>{value.stock_status}</td>
    </TableRow>
  );
};
