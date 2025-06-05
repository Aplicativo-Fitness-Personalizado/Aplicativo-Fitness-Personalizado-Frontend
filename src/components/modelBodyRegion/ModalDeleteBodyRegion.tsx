import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import './ModalBodyRegion.css';
import FormDeleteBodyRegion from '../formBodyRegion/FormDeleteBodyRegion';

export default function ModalDeleteBodyRegion() {


  return (
    <div>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
            Deletar região
          </button>
        }
        modal
        nested
      >
        {((close: () => void) => (
          <FormDeleteBodyRegion closeModal={close} />
        )) as unknown as React.ReactNode}

      </Popup>
    </div>
  )
}
