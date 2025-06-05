import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from 'react-router';
import { RotatingLines } from 'react-loader-spinner';
import { cadastrarUsuario } from '../../services/Service';
import type Usuario from '../../models/Usuario';

function Cadastro() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmaSenha, setConfirmaSenha] = useState<string>("")
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    altura: '',
    peso: ''
  })

  function retornar() {
    navigate('/login')
  }

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario(
          "/usuarios/cadastrar",
          {
            nome: usuario.nome,
            usuario: usuario.usuario,
            senha: usuario.senha,
            altura: usuario.altura,
            peso: usuario.peso
          },
          setUsuario

        );
         alert("Usuário foi autenticado com sucesso!")
         navigate('/')
      } catch (error) {
       alert("Os dados do Usuário estão inconsistentes!")
       navigate('/')
      }
    } else {
      alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
      navigate('/')
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <span className="bg-black text-white px-2 py-1 text-sm rounded font-bold">✔️ FITLAB</span>

          </div>

          <h2 className="text-3xl font-bold mb-6">Cadastro</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold flex flex-col gap-4">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3'
          onSubmit={cadastrarNovoUsuario}>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
<div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
            </div>
            
            <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
<div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>


            <div className="flex flex-col w-full">
            <label htmlFor="altura">Altura</label>
            <input
              type="text"
              id="altura"
              name="altura"
              placeholder="altura"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.altura}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
<div className="flex flex-col w-full">
            <label htmlFor="peso">Peso</label>
            <input
              type="text"
              id="peso"
              name="peso"
              placeholder="Peso"
              className="border-2 border-slate-700 rounded p-2"
              value={usuario.peso}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              type='reset'
              className='rounded text-white bg-red-400 
                hover:bg-red-700 w-1/2 py-2'
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type='submit'
              className='rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center'
            >
              {isLoading ? <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
                <span>Cadastrar</span>
              }

            </button>
          </div>
        </form>
      </div>
      </div>
      </div>

          
{/* 
            <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white py-2 rounded font-semibold">
              Cadastrar
            </button>
          </form>
          <p className="text-sm mt-4">
            Já tem uma conta?{' '}
            <a href='/login' className="text-black font-semibold underline">
              Acessar
            </a>
          </p>

        </div>

      </div> */}

      <div className="w-1/2 h-screen bg-cover bg-no-repeat bg-position-[center_top_-79px] relative bg-[url(https://cdn.discordapp.com/attachments/1361772055749595277/1380028753631252550/7-dicas-para-ter-melhores-resultados-na-academia-2048x1365.png?ex=6842636e&is=684111ee&hm=81a328ab7d74b220efc4cf21f8f45103d94679fef9f1e028f223425507e6533b&)] ">
        <div className="absolute bottom-8 left-8 text-white text-xl max-w-sm">
          <p>
            Encontre o equilíbrio entre o desenvolvimento do software <br /> e do seu corpo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
