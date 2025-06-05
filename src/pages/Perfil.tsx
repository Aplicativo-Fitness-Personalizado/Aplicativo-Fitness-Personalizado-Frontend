import { UserCircleIcon, HeartbeatIcon } from "@phosphor-icons/react";
import { Link } from "react-router"

function Perfil() {
    return (
        <div className="min-h-screen bg-background text-text p-4">
            {/* Saudação */}
            <section className="max-w-4xl mx-auto mt-10 text-center">
                <h1 className="text-text text-4xl font-bold mb-2">Olá, João 👋</h1>
                <p className="text-text-tertiary text-2xl">Pronto para mais um treino hoje?</p>
            </section>

            {/* Card de Perfil */}
            <section className="bg-white text-text rounded-xl shadow-lg p-6 w-full max-w-4xl mx-auto mt-16 flex items-end gap-6">
                <div className="flex items-center gap-6 flex-grow">
                    <img
                        src="https://i.pravatar.cc/100"
                        className="w-32 h-32 rounded-full border-2 border-primary"
                        alt="Avatar"
                    />
                    <div>
                        <h2 className="text-text text-2xl font-bold mb-2">João da Silva</h2>
                        <p className="text-text-tertiary">joao@email.com</p>
                    </div>
                </div>

                <Link to="/editar-perfil" className="px-4 py-2 bg-black text-light rounded hover:bg-zinc-800 cursor-pointer">
                    Editar Perfil
                </Link>
            </section>

            {/* Painel de Ações */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12 justify-center">
                <Link to="/">
                    <div className="bg-primary p-6 rounded-lg shadow hover:shadow-lg transition h-40">
                        <div className="flex items-center gap-2 mb-4">
                            <UserCircleIcon size={28} />
                            <h3 className="text-lg font-bold text-text">Meus Treinos</h3>
                        </div>
                        <p className="text-base text-text">Acesse sua rotina personalizada.</p>
                    </div>
                </Link>

                <Link to="/">
                    <div className="bg-primary p-6 rounded-lg shadow hover:shadow-lg transition h-40">
                        <div className="flex items-center gap-2 mb-4">
                            <HeartbeatIcon size={28} />
                            <h3 className="text-lg font-bold text-text">Consultar IMC</h3>
                        </div>
                        <p className="text-base text-text mb-2">Verifique seu índice de massa corporal.</p>
                    </div>
                </Link>
            </section>

        </div >
    );
}

export default Perfil;
