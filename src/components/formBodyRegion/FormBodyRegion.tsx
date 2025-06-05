import arm from '../../assets/icons/arm.png';
import Button from '../Button';
import Input from '../Input';

export default function FormBodyRegion({ closeModal }: { closeModal: () => void }) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={arm} alt="icone de musculo" className='w-[64px] h-[64px]' />
        <p className="text-2xl font-semibold text-gray-800">Nova Região do Corpo</p>
      </div>
      <form action="" method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input label='Nome da Região' placeholder='Costas...' name='bodyRegion' required />
        <div className='flex flex-col gap-2'>
          <label htmlFor="" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text-secundary border-2 focus:outline-none focus:ring-2 focus:ring-primary' id="" placeholder='Descrição...'></textarea>
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