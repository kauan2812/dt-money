import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { Table } from "../../components/Table";


export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <SearchForm />
      <Table />
    </div>
  )
}