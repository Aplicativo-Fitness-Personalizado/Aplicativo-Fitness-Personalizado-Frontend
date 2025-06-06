import { useNavigate, useParams } from 'react-router';
import arm from '../../assets/icons/arm.png';
import Button from '../Button';
import Input from '../Input';
import { useContext, useEffect, useState, type ChangeEvent } from 'react';
import type RegiaoCorporal from '../../models/RegiaoCorporal';
import { AuthContext } from '../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../services/Service';
import { ToastAlerts } from '../../util/ToastAlerts';
import { RotatingLines } from 'react-loader-spinner';

export default function FormBodyRegion({ closeModal }: { closeModal: () => void }) {

  const navigate = useNavigate();

  const [regiao, setRegiao] = useState<RegiaoCorporal>({} as RegiaoCorporal)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/regiao_corporal/${id}`, setRegiao, {
        headers: { Authorization: token }
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setRegiao({
      ...regiao,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaRegiao(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/regiao_corporal`, regiao, setRegiao, {
          headers: { 'Authorization': token }
        })
        ToastAlerts("O registro foi atualizado com sucesso!", "sucesso")
      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout();
        } else {
          ToastAlerts("Erro ao atualizar o registro da Região.", "erro")
        }

      }
    } else {
      try {
        await cadastrar(`/regiao_corporal`, regiao, setRegiao, {
          headers: { 'Authorization': token }
        })
        ToastAlerts("A região foi cadastrada com sucesso!", "sucesso")
      } catch (error: any) {
        console.log(error);

        if (error.toString().includes('403')) {
          handleLogout();
        } else {
          ToastAlerts("Erro ao cadastrar a Região.", "erro")
        }

      }
    }

    setIsLoading(false)
    closeModal()
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={arm} alt="icone de musculo" className='w-[64px] h-[64px]' />
        {
          id === undefined
            ? <p className="text-2xl font-semibold text-gray-800">Nova Região</p>
            : <p className="text-2xl font-semibold text-gray-800">Editar Região</p>
        }
      </div>
      <form method="post" className="flex flex-col gap-4" onSubmit={gerarNovaRegiao}>
        <Input label='Nome da Região' placeholder='Costas...' name='nome' required value={regiao.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        <div className='flex flex-col gap-2'>
          <label htmlFor="descricao" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="descricao" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary' id="descricao" placeholder='Descrição...' value={regiao.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)} ></textarea>
        </div>
        <div className='flex gap-2'>
          <Button type='submit'>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

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