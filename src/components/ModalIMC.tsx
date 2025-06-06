import Popup from "reactjs-popup";
import LogoBalanca from "../assets/img/LogoBalanca.png";
import { useContext, useEffect, useState } from "react";
import { buscaIMC } from "../services/Service";
import { AuthContext } from "../contexts/AuthContext";
import Button from "./Button";

export default function ModalIMC() {

  const [IMC, setIMC] = useState({ usuario: "", classificacao: "", imc: "" })
  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function calcularIMC(id: string) {
    try {
      await buscaIMC(`/usuarios/imc/${id}`, setIMC, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        handleLogout()
      }
    }
  }

  useEffect(() => {
    calcularIMC(String(usuario.id))
  }, [])

  return (
    <div>
      <Popup
        trigger={
          <button className="bg-gray-800 text-white w-[200px] rounded-sm h-[56px] flex gap-3 items-center justify-around cursor-pointer font-semibold">
            <span className="text-xs md:text-sm">
              Calcule seu IMC
            </span>
            <img src={LogoBalanca} className="w-[18px] h-[18px]" />
          </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <div className="flex flex-col gap-4 p-4">
            <h2>IMC</h2>
            <p>{IMC.usuario}</p>
            <p>{IMC.classificacao}</p>
            <p>{IMC.imc}</p>
            <Button onClick={() => close()} variant="cancel"> Fechar </Button>
          </div>
        )) as unknown as React.ReactNode}
      </Popup>
    </div>
  )
}
