import type Treino from '../../models/Treino'


import ModalDeleteTraining from '../modalTraining/ModalDeleteTraining';
import ModalTraining from '../modalTraining/ModalTraining';


interface CardTreinoProps {
  treino: Treino
  atualizarLista: () => void
}

function CardTreino({ atualizarLista, treino }: CardTreinoProps) {
  return (
    <div className="relative bg-white rounded-xl cursor-pointer content-center pb-15 shadow-md hover:shadow-xl shadow-gray-600 transition-shadow duration-300 w-[392px] h-[336px] px-6 py-4 border-1 border-gray-200">
      <div className="grid grid-cols-2 text-gray-500 mb-2 ">
        <div className="">
          <p className="font-normal">Título</p>
          <p className="text-black font-semibold block overflow-hidden whitespace-nowrap truncate ">{treino.titulo}</p>
        </div>
        <div className="ml-7">
          <p className="font-normal">Região Trabalhada</p>
          <p className="text-black font-semibold">{treino.regiaoCorporal?.nome}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 text-gray-500 mb-2">
        <div>
          <p className="font-normal">Tempo de Descanso</p>
          <p className="text-black font-semibold">{treino.tempoDescanso}</p>
        </div>
        <div className="ml-7">
          <p className="font-normal">Repetição</p>
          <p className="text-black font-semibold">{treino.repeticao}</p>
        </div>
      </div>

      <div className="text-gray-500 pb-13">
        <p className="font-normal">Descrição:</p>
        <p className="text-black font-semibold block overflow-hidden ">{treino.descricao}</p>
      </div>

      <div className="flex justify-between items-center absolute bottom-8 left-6 right-6">
        <ModalTraining id={String(treino.id)} atualizarLista={atualizarLista} />
        <ModalDeleteTraining atualizarLista={atualizarLista} id={treino.id} />
      </div>

    </div>
  )
}

export default CardTreino