import { TableRow } from "./styles"

export const ListStock = ({ value }) => {
  const date = new Date(Date.parse(value.stock_date));
  const resultDate = date.getDay() + '/'+ date.getMonth() + '/'+ date.getFullYear();
  return (
    <TableRow>
      <td>{resultDate}</td>
      <td>{value.stock_open.toFixed(2)}</td>
      <td>{value.stock_high.toFixed(2)}</td>
      <td>{value.stock_low.toFixed(2)}</td>
      <td>{value.stock_close.toFixed(2)}</td>
      <td>{value.stock_volume.toFixed(3)}</td>
      <td>{value.stock_status}</td>
    </TableRow>
  );
};
