import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router"

import Input from "../components/Input"
import Button from "../components/Button"

import { AuthContext } from "../contexts/AuthContext"
import { ToastAlerts } from "../util/ToastAlerts"
import { atualizar } from "../services/Service"

export default function EditPerfil() {
  const navigate = useNavigate()
  const { usuario, setUsuario } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    id: usuario.id,
    nome: usuario.nome,
    usuario: usuario.usuario, // email
    senha: usuario.senha,
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      await atualizar("/usuarios/atualizar", formData, setUsuario, {
        headers: {
          Authorization: usuario.token
        }
      })

      ToastAlerts("Dados atualizados com sucesso!", "success")
      navigate("/perfil")
    } catch (error) {
      ToastAlerts("Erro ao atualizar dados. Verifique os campos.", "error")
    }
  }

  return (
    <div className="min-h-screen w-full text-text">
      <div className="max-w-[600px] m-auto pt-10">
        <h2 className="font-medium text-4xl mb-8">Seus Dados</h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="usuario"
            type="email"
            value={formData.usuario}
            onChange={handleChange}
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={formData.senha}
            onChange={handleChange}
          />
          <div className="flex gap-6">
            <Input
              label="Altura"
              name="altura"
              value={formData.altura}
              onChange={handleChange}
            />
            <Input
              label="Peso"
              name="peso"
              value={formData.peso}
              onChange={handleChange}
            />
          </div>
          <Button>Atualizar</Button>
        </form>
      </div>
    </div>
  )
}
