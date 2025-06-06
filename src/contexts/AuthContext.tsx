/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, type ReactNode, useState } from "react"

import type UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { ToastAlerts } from "../util/ToastAlerts"

interface AuthContextProps {
  usuario: UsuarioLogin
  setUsuario: React.Dispatch<React.SetStateAction<UsuarioLogin>>
  handleLogout(): void
  handleLogin(usuario: UsuarioLogin): Promise<void>
  isLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    altura: "",
    peso: "",
    token: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true)
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario)
      ToastAlerts("Usuário foi autenticado com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerts("Os dados do Usuário estão inconsistentes!", "erro")
    }
    setIsLoading(false)
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      altura: "",
      peso: "",
      token: ""
    })
  }

  return (
    <AuthContext.Provider value={{ usuario, setUsuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}