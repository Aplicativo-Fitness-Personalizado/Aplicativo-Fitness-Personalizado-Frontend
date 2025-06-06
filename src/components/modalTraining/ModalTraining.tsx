import Popup from 'reactjs-popup';
import FormTraining from '../formTraining/FormTraining';
import LogoTreino from "../../assets/img/LogoTreino.png";

import 'reactjs-popup/dist/index.css';
import './ModalTraining.css';
import { ToastAlerts } from '../../util/ToastAlerts';
import { atualizar, cadastrar } from '../../services/Service';
import editar from "../../assets/img/Editar.png";

export default function ModalTraining({ atualizarLista, id }: { atualizarLista: () => void, id?: string }) {

  return (
    <div>
      <Popup
        trigger={
          id !== undefined
            ? <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition-colors duration-1000 w-[150px] h-[50px]">
              <img src={editar} alt="Logo do lápis" className="w-[14px] h-[16px] inline-block mr-2" />
              Editar
            </button>
            : <button className="bg-black text-white px-6 rounded-sm h-[56px] flex gap-3 items-center justify-around cursor-pointer font-semibold">
              <span className="text-xs md:text-sm">
                Cadastrar Treino
              </span>
              <img src={LogoTreino} className="w-[23px] h-[23px]" />
            </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <FormTraining id={id} atualizarLista={atualizarLista} closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
