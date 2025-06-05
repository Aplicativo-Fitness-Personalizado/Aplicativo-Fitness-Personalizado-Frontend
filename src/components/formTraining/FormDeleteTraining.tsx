import { useContext, useEffect, useState } from 'react';
import alter from '../../assets/icons/alter.png';
import type Treino from '../../models/Treino';
import Button from '../Button';
import Input from '../Input';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { buscar, deletar } from '../../services/Service';
import { ToastAlerts } from '../../util/ToastAlerts';
import { RotatingLines } from 'react-loader-spinner';

export default function FormDeleteTraining({ closeModal }: { closeModal: () => void }) {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [treino, setTreino] = useState<Treino>({} as Treino)

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/treinos/${id}`, setTreino, {
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

  async function deletarTreino() {
    setIsLoading(true)

    try {
      await deletar(`/treinos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      ToastAlerts("Treino apagado com sucesso", "sucesso")

    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      } else {
        ToastAlerts("Erro ao deletar o treino.", "erro")
      }
    }

    setIsLoading(false)
    closeModal()
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={alter} alt="icone de musculo" className='w-[64px] h-[64px]' />
        <p className="text-2xl font-semibold text-gray-800">Remover Treino</p>
        <p className="text-sm font-semibold text-gray-800">Você tem certeza que deseja remover o registro a seguir?</p>
      </div>
      <form className="flex flex-col gap-4">
        <Input label='Titulo' placeholder='Titulo' name='bodyRegion' disabled value={treino.titulo} />
        <div className='flex flex-col gap-2'>
          <label htmlFor="descricao" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="descricao" disabled className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200' id="descricao" placeholder='Descrição...' value={treino.descricao}></textarea>
        </div>
        <div className='flex gap-2'>
          <Input label='Repetição' placeholder='4 series de 10 repetições' name='repetição' disabled value={treino.repeticao} />
          <Input label='Tempo de descanso' placeholder='60 min' name='tempoDescanso' disabled value={treino.tempoDescanso} />
        </div>
        <div className='flex gap-2'>
          <Button variant='warning' onClick={deletarTreino}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Remover</span>
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