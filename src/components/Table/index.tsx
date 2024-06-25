import { useContext } from "react";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Table() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>

          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}

        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}