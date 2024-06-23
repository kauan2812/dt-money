import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00B37E"/>  
        </header>
        R$ 17.400,00
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#F75A68"/>  
        </header>
        R$ 1.259,00
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#fff"/>  
        </header>
        R$ 16.141,00
      </SummaryCard>
    </SummaryContainer>
  )
}