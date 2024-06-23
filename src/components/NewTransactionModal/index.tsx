import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay } from './styles';
import { X } from '@phosphor-icons/react';

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
          <button type='submit'>Cadastrar</button>
        </form>
      </Content>

    </Dialog.Portal>
  )
}