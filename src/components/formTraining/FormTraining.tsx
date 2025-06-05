import alter from '../../assets/icons/alter.png';
import Button from '../Button';
import Input from '../Input';

export default function FormTraining({ closeModal }: { closeModal: () => void }) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={alter} alt="icone de musculo" className='w-[64px] h-[64px]' />
        <p className="text-2xl font-semibold text-gray-800">Novo Treino</p>
      </div>
      <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label='Titulo' placeholder='Nome' name='bodyRegion' required />
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary' id="" placeholder='Descrição...'></textarea>
        </div>
        <Input label='Repetição' placeholder='4' name='repetição' required type="number" />
        <div className='flex gap-2'>
          <Input label='Altura' placeholder='1.95' name='altura' required />
          <Input label='Altura' placeholder='90' name='peso' required />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="regioes" className="w-full pl-3 font-normal">Região trabalhada</label>
          <select name="regioes" id="" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary'>
            <option value="costas">costas</option>
            <option value="">Posterior</option>
            <option value="">biceps</option>
            <option value="">triceps</option>
          </select>
        </div>
        <div className='flex gap-2'>
          <Button>
            Cadastrar
          </Button>
          <Button variant='cancel' className='mt-2' onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}