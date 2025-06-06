import { UserCircleIcon, HeartbeatIcon } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router"
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerts } from "../util/ToastAlerts";

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            ToastAlerts("Você precisa estar logado", "info")
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className="min-h-screen bg-background text-text p-4">

            <section className="max-w-4xl mx-auto mt-10 text-center">
                <h1 className="text-text text-4xl font-bold mb-2">Olá, {usuario.nome} 👋</h1>
                <p className="text-text-tertiary text-2xl">Pronto para mais um treino hoje?</p>
            </section>

            <section className="bg-white text-text rounded-xl shadow-lg p-6 w-full max-w-4xl mx-auto mt-16 flex items-end gap-6">
                <div className="flex items-center gap-6 flex-grow">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        className="w-32 h-32 rounded-full border-2 border-primary"
                        alt={`Avatar de ${usuario.nome}`}
                    />
                    <div>
                        <h2 className="text-text text-2xl font-bold mb-2">Nome: {usuario.nome}</h2>
                        <p className="text-text-tertiary">Email: {usuario.usuario}</p>
                    </div>
                </div>

                <Link to="/editar-perfil" className="px-4 py-2 bg-black text-light rounded hover:bg-zinc-800 cursor-pointer">
                    Editar Perfil
                </Link>
            </section>


            <section className="flex justify-center gap-6 max-w-3xl mx-auto mt-12 justify-center">
                <Link to="/home">
                    <div className="bg-black text-white p-6 rounded-lg shadow hover:shadow-lg transition h-40">
                        <div className="flex items-center gap-2 mb-4">
                            <UserCircleIcon size={28} />
                            <h3 className="text-lg font-bold">Meus Treinos</h3>
                        </div>
                        <p className="text-base">Acesse sua rotina personalizada.</p>
                    </div>
                </Link>
            </section>

        </div >
    );
}

export default Perfil;
