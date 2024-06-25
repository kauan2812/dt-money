import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary()
  
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