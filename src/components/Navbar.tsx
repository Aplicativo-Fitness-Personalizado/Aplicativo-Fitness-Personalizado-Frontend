import { SignOutIcon, UserIcon, Wrench } from "@phosphor-icons/react";
import Logo from "../assets/img/logo.png"
import { Link, useNavigate } from 'react-router';
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";


function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }
    let component: ReactNode

    if (usuario.token !== "") {

        component = (

            <header className="w-full bg-background text-light shadow-md flex items-center justify-between px-6 py-3">

                <Link to="/home" className="flex items-center gap-4 border-border">
                    <img src={Logo} alt="Logo FitLab" className="h-12" />
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/perfil" className="flex items-center gap-4 border-border bg-black text-light text-lg px-6 py-3 rounded ">
                        <span>Perfil</span>
                        <UserIcon size={24} weight="bold" />
                    </Link>

                    <Link to="/atualizacoes" className="flex items-center gap-4 border-border bg-black text-light text-lg px-4 py-3 rounded ">
                        <span>Em Breve</span>
                        <Wrench size={24} weight="bold" />
                    </Link>

                    <Link to="/login" onClick={logout} className="flex items-center gap-4 border-border bg-red-500 text-light text-lg px-6 py-3 rounded ">
                        <span>Sair</span>
                        <SignOutIcon size={24} weight="bold" />
                    </Link>
                </div>
            </header>

        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar

function ToastAlerta(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}
