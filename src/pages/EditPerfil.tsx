import Input from '../components/Input'
import Button from '../components/Button'

export default function EditPerfil() {
  return (
    <div className="min-h-screen w-full text-text">
      <div className='max-w-[600px] m-auto pt-10'>
        <h2 className='font-medium text-4xl mb-8'>Seus Dados</h2>
        <form className='flex flex-col gap-6'>
          <Input label="Nome" name="nome" />
          <Input label="Email" name="email" type="email" />
          <Input label="Senha" name="senha" type="password" />
          <div className='flex gap-6'>
            <Input label="Altura" name="altura" />
            <Input label="Peso" name="peso" />
          </div>
          <Button>Atualizar</Button>
        </form>
      </div>
    </div>
  )
}
