import Popup from 'reactjs-popup';
import Excluir from "../../assets/img/Excluir.png";

import 'reactjs-popup/dist/index.css';
import './ModalTraining.css';
import FormDeleteTraining from '../formTraining/FormDeleteTraining';

export default function ModalDeleteTraining({ atualizarLista, id }: { atualizarLista: () => void, id: number }) {


  return (
    <div>
      <Popup
        trigger={
          <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-[#ff2d55] text-white hover:bg-red-600 transition-colors duration-1000 w-[150px] h-[50px]">
            <img src={Excluir} alt="Logo da Lixeixa" className="w-[14px] h-[16px] inline-block mr-2" />
            Excluir
          </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <FormDeleteTraining atualizarLista={atualizarLista} id={id} closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
