import Popup from 'reactjs-popup';
import FormTraining from '../formTraining/FormTraining';
import LogoTreino from "../../assets/img/LogoTreino.png";

import 'reactjs-popup/dist/index.css';
import './ModalTraining.css';

export default function ModalTraining() {

  return (
    <div>
      <Popup
        trigger={
          <button className="bg-black text-white px-6 rounded-sm h-[56px] flex gap-3 items-center justify-around cursor-pointer font-semibold">
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
          <FormTraining closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
