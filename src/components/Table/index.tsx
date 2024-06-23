import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Table() {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="40%">Desenvolvimento de site</td>
            <td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="40%">Hamburguer</td>
            <td>
              <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
            </td>
            <td>Alimentação</td>
            <td>14/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}