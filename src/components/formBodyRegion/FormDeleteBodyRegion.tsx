import arm from '../../assets/icons/arm.png';
import Button from '../Button';
import Input from '../Input';
import { useNavigate, useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import type RegiaoCorporal from '../../models/RegiaoCorporal';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar, deletar } from '../../services/Service';
import { ToastAlerts } from '../../util/ToastAlerts';
import { RotatingLines } from 'react-loader-spinner';


export default function FormDeleteBodyRegion({ closeModal }: { closeModal: () => void }) {


  const navigate = useNavigate()

  const [regiao, setRegiao] = useState<RegiaoCorporal>({} as RegiaoCorporal)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/regiao_corporal/${id}`, setRegiao, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerts('Você precisa estar logado', 'info')
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarRegiao() {
    setIsLoading(true)

    try {
      await deletar(`/regiao_corporal/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      ToastAlerts("Região apagada com sucesso", "sucesso")

    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      } else {
        ToastAlerts("Erro ao deletar a região.", "erro")
      }
    }

    setIsLoading(false)
    closeModal()
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={arm} alt="icone de musculo" className='w-[64px] h-[64px]' />
        <p className="text-2xl font-semibold text-gray-800">Remover Região</p>
        <p className="text-sm font-semibold text-gray-800">Você tem certeza que deseja remover o registro a seguir?</p>
      </div>
      <form className="flex flex-col gap-4">
        <Input disabled label='Nome da Região' placeholder='Costas...' name='nome' value={regiao.nome} />
        <div className='flex flex-col gap-2'>
          <label htmlFor="descrição" className="w-full pl-3 font-normal">Descrição</label>
          <textarea disabled value={regiao.descricao} name="descricao" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text-secundary border-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200' id="" placeholder='Descrição...'></textarea>
        </div>
        <div className='flex gap-2'>
          <Button variant='warning' onClick={deletarRegiao}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> : <span>Remover</span>
            }
          </Button>
          <Button variant='cancel' className='mt-2' onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}