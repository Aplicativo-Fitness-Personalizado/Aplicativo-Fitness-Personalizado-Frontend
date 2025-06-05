import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './ModalTraining.css';
import FormDeleteTraining from '../formTraining/FormDeleteTraining';

export default function ModalDeleteTraining() {
  return (
    <div>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
            Deletar Treino
          </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <FormDeleteTraining closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
