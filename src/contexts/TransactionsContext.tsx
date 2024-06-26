import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number,
  createdAt: string
}

interface TransactionConxtetType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionConxtetType) 

export function TransactionsProvider({ children }: TransactionsProviderProps) {
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
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}