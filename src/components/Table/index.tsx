import { useEffect, useState } from "react";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number,
  createdAt: string
}

export function Table() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3000/transactions')
      const data = await response.json()

      setTransactions(data)
    }

    loadTransactions()
  }, [])

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>

          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
          
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}