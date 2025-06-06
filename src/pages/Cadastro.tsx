import { Link, useNavigate } from "react-router";
import Logo from "../assets/Logo.png"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type Usuario from "../models/Usuario";
import { ToastAlerts } from "../util/ToastAlerts";
import { usuario as cadastrarUsuario } from "../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Background from "../assets/img/background.jpg"


function Cadastro() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    altura: '',
    peso: '',
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/login')
  }

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
      console.log(usuario);


      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, {
          nome: usuario.nome,
          usuario: usuario.usuario,
          senha: usuario.senha,
          altura: usuario.altura,
          peso: usuario.peso,
        }, setUsuario)
        ToastAlerts("Usuário cadastrado com sucesso!", "sucesso")
      } catch (error) {
        ToastAlerts("Erro ao cadastrar o usuário!", "erro")
      }
    } else {
      ToastAlerts("Dados do usuário inconsistentes! Verifique as informações do cadastro.", "erro")
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-md">
          <div className="flex items-left mb-6">
            <img src={Logo} alt="Logo Fitlab" className="h-12" />
          </div>

          <h2 className="text-text text-4xl font-bold text-left mb-4">Cadastro</h2>

          <form onSubmit={cadastrarNovoUsuario}>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-text mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="usuario" className="block text-text mb-1">Email</label>
              <input
                type="email"
                id="usuario"
                name="usuario"
                placeholder="Exemplo@email.com"
                autoComplete="off"
                className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="senha" className="block text-text mb-1">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="********"
                autoComplete="off"
                className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-text mb-1">Confirmar senha</label>
              <input
                name="confirmarSenha"
                type="password"
                placeholder="********"
                autoComplete="off"
                className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>

            <div className="flex gap-4">
              <div className="mb-4">
                <label htmlFor="altura" className="block text-text mb-1">Altura</label>
                <input
                  id="altura"
                  name="altura"
                  type="text"
                  placeholder="1.75"
                  className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={usuario.altura}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="peso" className="block text-text mb-1">Peso</label>
                <input
                  id="peso"
                  name="peso"
                  type="text"
                  placeholder="90"
                  className="w-full px-4 py-2 text-text border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  value={usuario.peso}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center bg-primary text-text font-semibold py-2 rounded transition cursor-pointer"
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
          </form>
          <p className="text-center text-text-tertiary mt-6">
            Já tem uma conta?
            <Link to="/login" className="text-black font-semibold hover:underline inline-flex items-center gap-1">
              Acessar <span>→</span>
            </Link>
          </p>

        </div>

      </div>

      <div
        className="w-1/2 bg-no-repeat bg-[center_top_-79px] relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
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
