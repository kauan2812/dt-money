import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, Overlay, SubmitButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionModalSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome'])
})

type newTransactionModalInputs = z.infer<typeof newTransactionModalSchema>

export function NewTransactionModal() {
  const { register, handleSubmit, formState: {isSubmitting} } = useForm<newTransactionModalInputs>({
    resolver: zodResolver(newTransactionModalSchema)
  })

  function handleCreateNewTransaction(data: newTransactionModalInputs) {
    console.log(data);
  }

  return (
    <Dialog.Portal>

      <Overlay />
      
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <Close asChild>
          <button><X size={24} color='#7C7C8A'/></button>
        </Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          
          <input 
            type="text"
            placeholder='Descrição'
            {...register('description')}
            required
          />

          <input 
            type="number"
            placeholder='Preço'
            {...register('price', {valueAsNumber: true } )}
            required
          />

          <input 
            type="text"
            placeholder='Categoria'
            {...register('category')}
            required
          />

          <TransactionType>

            <TransactionTypeButton value="income" variant='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>  

            <TransactionTypeButton value="outcome" variant='outcome'>
              <ArrowCircleDown size={24} />
              Saída 
            </TransactionTypeButton>
          </TransactionType>

          <SubmitButton type='submit' disabled={isSubmitting}>Cadastrar</SubmitButton>
        </form>
      </Content>

    </Dialog.Portal>
  )
}