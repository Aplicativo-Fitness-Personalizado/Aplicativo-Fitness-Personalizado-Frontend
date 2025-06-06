import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router"

import Input from "../components/Input"
import Button from "../components/Button"

import { AuthContext } from "../contexts/AuthContext"
import { ToastAlerts } from "../util/ToastAlerts"
import { atualizar, buscar } from "../services/Service"
import { RotatingLines } from "react-loader-spinner"

export default function EditPerfil() {
  const navigate = useNavigate()
  const { usuario, setUsuario, handleLogout } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const token = usuario.token

  const [formData, setFormData] = useState({
    id: "",
    nome: "",
    usuario: "",
    senha: "",
    altura: "",
    peso: ""
  })

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerts("Você precisa estar logado!", "info")
      navigate("/")
    }
  }, [usuario.token])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit() {
    console.log(formData);


    setIsLoading(true)
    try {
      await atualizar("/usuarios/atualizar", formData, setUsuario, {
        headers: {
          Authorization: usuario.token
        }
      })

      ToastAlerts("Dados atualizados com sucesso!", "sucesso")
      ToastAlerts("Por motivos de segurança o usuario foi deslogado", "info")
      handleLogout()
    } catch (error) {
      ToastAlerts("Erro ao atualizar dados. Verifique os campos.", "error")
      setIsLoading(false)
    }
  }

  async function buscarUserPorId(id: string) {
    try {
      await buscar(`/usuarios/${id}`, (data: any) => {
        const { id, nome, usuario, altura, peso } = data
        setFormData({
          id,
          nome,
          usuario,
          senha: "", // sempre limpar a senha
          altura,
          peso
        })
      }, {
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
    buscarUserPorId(String(usuario.id)).then(() => {
      setFormData((prevData) => ({
        ...prevData,
        senha: ""
      }))
    })
  }, [])

  return (
    <div className="min-h-screen w-full text-text">
      <div className="max-w-[600px] m-auto pt-10">
        <h2 className="font-medium text-4xl mb-8">Seus Dados</h2>

        <div className="flex flex-col gap-6">
          <Input
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <Input
            label="Email"
            name="usuario"
            type="email"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
          <Input
            label="Senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <div className="flex gap-6">
            <Input
              label="Altura"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
              required
            />
            <Input
              label="Peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
              required
            />
          </div>
          <Button onClick={handleSubmit}>
            {isLoading ?
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              /> :
              <span>Atualizar</span>
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
