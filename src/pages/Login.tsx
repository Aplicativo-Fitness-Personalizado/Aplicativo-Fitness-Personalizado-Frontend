import { Link, useNavigate } from "react-router"
import Logo from "../assets/Logo.png"
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { AuthContext } from "../contexts/AuthContext";
import { RotatingLines } from 'react-loader-spinner';

function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center py-7 flex items-center justify-center"
            style={{ backgroundImage: "url('https://ik.imagekit.io/lml7cc5ua/imagem-fundo.png?updatedAt=1749063545945')" }} // ajuste caminho da imagem
        >
            <div className="bg-background p-14 rounded-xl shadow-lg w-full max-w-lg">

                <div className="flex items-left mb-6">
                    <img src={Logo} alt="Logo Fitlab" className="h-12" />
                </div>

                <h2 className="text-text text-4xl font-bold text-left mb-2">Bem-vindo(a) ao Fitlab</h2>
                <p className="text-text-secundary text-sm text-left mb-6">
                    A academia para quem domina a linguagem do corpo e do código.
                </p>

                <form onSubmit={login}>
                    <div className="mb-4">
                        <label className="block text-text mb-1" htmlFor="usuario">Email</label>
                        <input
                            type="email"
                            id="usuario"
                            name="usuario"
                            placeholder="Exemplo@email.com"
                            className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-text mb-1" htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="********"
                            className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-text font-semibold py-2 rounded transition cursor-pointer">
                        {isLoading ? <RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span>Entrar</span>
                        }
                    </button>

                    <p className="text-center text-text-tertiary mt-6">
                        Não tem uma conta ainda?{" "}
                        <Link to="/cadastrar" className="text-black font-semibold hover:underline inline-flex items-center gap-1">
                            Registrar-se <span>→</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login