import alter from '../../assets/icons/alter.png';
import Button from '../Button';
import Input from '../Input';

export default function FormDeleteTraining({ closeModal }: { closeModal: () => void }) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={alter} alt="icone de musculo" className='w-[64px] h-[64px]' />
        <p className="text-2xl font-semibold text-gray-800">Remover Treino</p>
        <p className="text-sm font-semibold text-gray-800">Você tem certeza que deseja remover o registro a seguir?</p>
      </div>
      <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label='Titulo' placeholder='Titulo' name='bodyRegion' disabled />
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="" disabled className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200' id="" placeholder='Descrição...'></textarea>
        </div>
        <Input label='Repetição' placeholder='4' name='repetição' disabled type="number" />
        <div className='flex gap-2'>
          <Input label='Altura' placeholder='1.95' name='altura' disabled />
          <Input label='Altura' placeholder='90' name='peso' disabled />
        </div>
        <div className='mb-4'>
          <label htmlFor="regioes" className="w-full pl-3 font-normal">Descrição</label>
          <select disabled name="regioes" id="" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text-secundary border-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200'>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className='flex gap-2'>
          <Button variant='warning'>
            Remover
          </Button>
          <Button variant='cancel' className='mt-2' onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}