import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if(transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    { income: 0, outcome: 0, total: 0 })

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00B37E"/>  
        </header>
        {priceFormatter.format(summary.income)}
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#F75A68"/>  
        </header>
        {priceFormatter.format(summary.outcome)}
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#fff"/>  
        </header>
        {priceFormatter.format(summary.total)}
      </SummaryCard>
    </SummaryContainer>
  )
}