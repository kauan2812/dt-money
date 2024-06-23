import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryCardProps {
  variant?: "green" 
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 1.5rem 2rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    font-size: 1rem;
    font-weight: normal;
  }

  background: ${props => props.variant === "green" ? props.theme["green-700"] : props.theme["gray-700"]};
`;