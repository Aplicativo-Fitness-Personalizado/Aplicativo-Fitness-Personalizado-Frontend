import Popup from 'reactjs-popup';
import FormTraining from '../formTraining/FormTraining';

import 'reactjs-popup/dist/index.css';
import './ModalTraining.css';

export default function ModalTraining() {
  return (
    <div>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
            Novo treino
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
