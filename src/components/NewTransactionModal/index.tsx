import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, SubmitButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>

      <Overlay />
      
      <Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <Close asChild>
            <button><X size={24} color='#7C7C8A'/></button>
          </Close>
        <form action="">
          <input type="text" placeholder='Descrição' required/>
          <input type="number" placeholder='Preço' required/>
          <input type="text" placeholder='Categoria' required/>

          <TransactionType>
            <TransactionTypeButton value="income" variant='income'><ArrowCircleUp size={24} /> Entrada</TransactionTypeButton>
            <TransactionTypeButton value="outcome" variant='outcome'><ArrowCircleDown size={24} /> Saída </TransactionTypeButton>
          </TransactionType>

          <SubmitButton type='submit'>Cadastrar</SubmitButton>
        </form>
      </Content>

    </Dialog.Portal>
  )
}