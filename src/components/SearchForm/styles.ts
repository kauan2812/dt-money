import styled from "styled-components";

export const SearchFormContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background: ${props => props.theme["gray-900"]};
    border: 0;
    color: ${props => props.theme["gray-100"]};
  }

  button {
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: transparent;
    border-radius: 6px;
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border: 1px solid ${props => props.theme["green-300"]};
    cursor: pointer; 
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background: ${props => props.theme["green-300"]};
      color: ${props => props.theme.white};
    }
  }
`;