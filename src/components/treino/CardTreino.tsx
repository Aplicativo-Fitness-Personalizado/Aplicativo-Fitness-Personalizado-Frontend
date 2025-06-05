
import type Treino from '../../models/Treino'
import Editar from "../../assets/img/Editar.png";
import Excluir from "../../assets/img/Excluir.png";
import { Link } from 'react-router';


interface CardTreinoProps {
    treino: Treino
}

function CardTreino({treino}: CardTreinoProps) {
  return (
    <div className="bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl shadow-gray-600 transition-shadow duration-300 w-[392px] h-[336px] px-6 py-4 border-1 border-gray-200">
                  <div className="grid grid-cols-2 text-gray-500 mb-2">
                    <div className="">
                      <p className="font-normal">Título</p>
                      <p className="text-black font-semibold">{treino.titulo}</p>
                    </div>
                    <div className="ml-7">
                      <p className="font-normal">Região Trabalhada</p>
                      <p className="text-black font-semibold">{treino.regiaocorporal?.nome}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 text-gray-500  mb-2">
                    <div>
                      <p className="font-normal">Tempo de Descanso</p>
                      <p className="text-black font-semibold">{treino.tempoDescanso}</p>
                    </div>
                    <div className="ml-7">
                      <p className="font-normal">Repetição</p>
                      <p className="text-black font-semibold">{treino.repeticao}</p>
                    </div>
                  </div>

                  <div className="text-gray-500 mb-4 pb-13">
                    <p className="font-normal">Descrição:</p>
                    <p className="text-black font-semibold">{treino.descricao}</p>
                  </div>

               <div className="flex justify-between mt-4">

                <Link to={`/editar-treino/${treino.id}`}>
                  <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition-colors duration-1000 w-[150px] h-[50px]">
                    <img src={Editar} alt="Logo do lápis" className="w-[14px] h-[16px] inline-block mr-2" />
                    Editar
                  </button>
                </Link>

                 <Link to={`/deletar-treino/${treino.id}`}>
                    <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-[#ff2d55] text-white hover:bg-red-600 transition-colors duration-1000 w-[150px] h-[50px]">
                        <img src={Excluir} alt="Logo da Lixeixa" className="w-[14px] h-[16px] inline-block mr-2" />
                        Excluir
                    </button>
                  </Link>
                </div>
            </div>
  )
}

export default CardTreino