import { Link } from "react-router"
import Logo from "../assets/Logo.png"

function Login() {
    return (
        <>
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

                    <form>
                        <div className="mb-4">
                            <label className="block text-text mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Exemplo@email.com"
                                className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-text mb-1">Senha</label>
                            <input
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-text font-semibold py-2 rounded transition cursor-pointer"
                        >
                            Entrar
                        </button>
                    </form>

                    <p className="text-center text-text-tertiary mt-6">
                        Não tem uma conta ainda?{" "}
                        <Link to="/" className="text-black font-semibold hover:underline inline-flex items-center gap-1">
                            Registrar-se <span>→</span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login