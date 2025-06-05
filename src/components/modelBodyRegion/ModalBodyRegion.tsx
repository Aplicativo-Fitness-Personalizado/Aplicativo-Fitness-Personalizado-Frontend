import Popup from 'reactjs-popup';
import FormBodyRegion from '../formBodyRegion/FormBodyRegion';
import LogoRegiao from "../../assets/img/LogoRegiao.png"

import 'reactjs-popup/dist/index.css';
import './ModalBodyRegion.css';

export default function ModalBodyRegion() {
  return (
    <div>
      <Popup
        trigger={
          <button className="bg-black text-white px-6 rounded-sm h-[56px] flex gap-3  items-center justify-around cursor-pointer font-semibold">
            <span className="text-xs md:text-sm">
              Cadastrar Região
            </span>
            <img src={LogoRegiao} className="w-[23px] h-[23px]" />
          </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <FormBodyRegion closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
