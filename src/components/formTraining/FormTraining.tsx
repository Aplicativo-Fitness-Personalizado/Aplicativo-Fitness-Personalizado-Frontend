import { useNavigate, useParams } from 'react-router';
import alter from '../../assets/icons/alter.png';
import Button from '../Button';
import Input from '../Input';
import { useContext, useEffect, useState, type ChangeEvent } from 'react';
import type Treino from '../../models/Treino';
import type RegiaoCorporal from '../../models/RegiaoCorporal';
import { AuthContext } from '../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../services/Service';
import { ToastAlerts } from '../../util/ToastAlerts';
import { RotatingLines } from 'react-loader-spinner';

export default function FormTraining({ closeModal }: { closeModal: () => void }) {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [regioes, setRegioes] = useState<RegiaoCorporal[]>([])

  const [regiao, setRegiao] = useState<RegiaoCorporal>({ id: 0, nome: "", descricao: '' })
  const [treino, setTreino] = useState<Treino>({} as Treino)

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarTreinoPorId(id: string) {
    try {
      await buscar(`/Treinos/${id}`, setTreino, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  async function buscarRegiaoPorId(id: string) {
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

  async function buscarRegioes() {
    try {
      await buscar('/regiao_corporal', setRegioes, {
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
      navigate('/');
    }
  }, [token])

  useEffect(() => {
    buscarRegioes()

    if (id !== undefined) {
      buscarTreinoPorId(id)
    }
  }, [id])

  useEffect(() => {
    setTreino({
      ...treino,
      regiaoCorporal: regiao,
    })
  }, [regiao])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setTreino({
      ...treino,
      [e.target.name]: e.target.value,
      regiaoCorporal: regiao,
      usuario: usuario,
    });
  }

  async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/treinos`, treino, setTreino, {
          headers: {
            Authorization: token,
          },
        });

        ToastAlerts("Treino atualizado com sucesso", "sucesso")

      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout()
        } else {
          ToastAlerts("Erro ao atualizar o treino!", "erro")
        }
      }

    } else {
      try {
        console.log(treino);

        await cadastrar(`/treinos`, treino, setTreino, {
          headers: {
            Authorization: token,
          },
        })
        ToastAlerts("Treino cadastrado com sucesso!", "sucesso")

      } catch (error: any) {
        if (error.toString().includes('403')) {
          handleLogout()
        } else {
          ToastAlerts("Erro ao cadastrar o Treino!", "erro")
        }
      }
    }

    setIsLoading(false)
    closeModal()
  }

  const carregandoRegiao = regiao.descricao === '';

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex flex-col font-semibold items-center gap-4'>
        <img src={alter} alt="icone de musculo" className='w-[64px] h-[64px]' />
        {id === undefined
          ? <p className="text-2xl font-semibold text-gray-800">Novo Treino</p>
          : <p className="text-2xl font-semibold text-gray-800">Editar Treino</p>
        }
      </div>
      <form method="post" className="flex flex-col gap-4" onSubmit={gerarNovoTreino}>
        <Input label='Titulo' placeholder='Titulo' name='titulo' required value={treino.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        <div className='flex flex-col gap-2'>
          <label htmlFor="descricao" className="w-full pl-3 font-normal">Descrição</label>
          <textarea name="descricao" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary' id="" placeholder='Descrição...' value={treino.descricao}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}></textarea>
        </div>
        <div className='flex gap-2'>
          <Input label='Repetição' placeholder='4 series de 10 repetições' name='repeticao' required value={treino.repeticao} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
          <Input label='Tempo de descanso' placeholder='60 min' name='tempoDescanso' required value={treino.tempoDescanso} onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="regioesCorporal" className="w-full pl-3 font-normal">Região trabalhada</label>
          <select name="regioesCorporal" id="regioesCorporal" className='resize-none w-full rounded-sm border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground text-text border-2 focus:outline-none focus:ring-2 focus:ring-primary' onChange={(e) => buscarRegiaoPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione um Tema</option>
            {regioes.map((regiao) => (
              <>
                <option value={regiao.id}>{regiao.nome}</option>
              </>
            ))}
          </select>
        </div>
        <div className='flex gap-2'>
          <Button type='submit' disabled={carregandoRegiao}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
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