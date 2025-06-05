import Popup from 'reactjs-popup';
import FormBodyRegion from '../formBodyRegion/FormBodyRegion';

import 'reactjs-popup/dist/index.css';
import './ModalBodyRegion.css';

export default function ModalBodyRegion() {
  return (
    <div>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
            Nova região
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
