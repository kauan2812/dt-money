import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação"/>
      <button>
        <MagnifyingGlass size={32}/>
        Buscar
      </button>
    </SearchFormContainer>
  )
}