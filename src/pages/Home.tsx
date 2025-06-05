import LogoBanner from "../assets/img/LogoBanner.png";
import LogoBalanca from "../assets/img/LogoBalanca.png";

import Editar from "../assets/img/Editar.png";
import Excluir from "../assets/img/Excluir.png";
import ModalTraining from "../components/modalTraining/ModalTraining";
import ModalBodyRegion from "../components/modelBodyRegion/ModalBodyRegion";


function Home() {
  return (
    <>
      <div>
        <div className="bg-gray-100 font-sans">
          <div className="container mx-auto p-4">
            <div className="text-center my-8 relative">
              <div className="bg-gradient-to-r from-[#6C9D18] to-[#9FE722] text-white flex justify-between items-center overflow-hidden h-[300px] relative rounded-[12px]">
                <div className="space-x-4 w-full h-full flex flex-col justify-between">
                  <div className="font-semibold text-2xl md:text-4xl text-left p-13 flex flex-col justify-between h-full text-[#212120] ">

                    <div>
                      <h2 className="mb-2">Mente afiada, corpo forte.</h2>
                      <h2>Encontre seu equilibrio no Fitlab.</h2>
                    </div>

                    <button className="bg-gray-800 text-white w-[200px] rounded-sm h-[56px] flex gap-3 items-center justify-around cursor-pointer font-semibold">
                      <span className="text-xs md:text-sm">
                        Calcule seu IMC
                      </span>
                      <img src={LogoBalanca} className="w-[18px] h-[18px]" />
                    </button>
                  </div>

                  <img
                    src={LogoBanner}
                    alt="Logo FitLab"
                    className=" absolute right-3 "
                  />
                </div>
              </div>
            </div>

            <div className="mb-8"></div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8 p-5">
          <h3 className="text-xl font-semibold">Listagem dos treinos</h3>
          <div className="space-x-2 flex items-center p-2" >
            <ModalTraining />
            <ModalBodyRegion />
          </div>
        </div>


        <div className="grid md:grid-cols-3 gap-4 mb-8 p-3">

          <div className="bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl shadow-gray-600 transition-shadow duration-300 w-[392px] h-[336px] px-6 py-4 border-1 border-gray-200">
            <div className="grid grid-cols-2 text-gray-500 mb-2">
              <div className="">
                <p className="font-normal">Título</p>
                <p className="text-black font-semibold">Remada baixa</p>
              </div>
              <div className="ml-7">
                <p className="font-normal">Região Trabalhada</p>
                <p className="text-black font-semibold">Costas</p>
              </div>
            </div>

            <div className="grid grid-cols-2 text-gray-500  mb-2">
              <div>
                <p className="font-normal">Tempo de Descanso</p>
                <p className="text-black font-semibold">60min</p>
              </div>
              <div className="ml-7">
                <p className="font-normal">Repetição</p>
                <p className="text-black font-semibold">4×10</p>
              </div>
            </div>

            <div className="text-gray-500 mb-4 pb-13">
              <p className="font-normal">Descrição</p>
              <p className="text-black font-semibold">Trabalha os musculos musculares</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition-colors duration-1000 w-[150px] h-[50px]">
                <img src={Editar} alt="Logo do lápis" className="w-[14px] h-[16px] inline-block mr-2" />
                Editar

              </button>
              <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-[#ff2d55] text-white hover:bg-red-600 transition-colors duration-1000 w-[150px] h-[50px]">
                <img src={Excluir} alt="Logo da Lixeixa" className="w-[14px] h-[16px] inline-block mr-2" />
                Excluir
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl shadow-gray-600 transition-shadow duration-300 w-[392px] h-[336px] px-6 py-4 border-1 border-gray-200 ">
            <div className="grid grid-cols-2 text-gray-500 mb-2">
              <div>
                <p className="font-normal">Título</p>
                <p className="text-black font-semibold">Remada baixa</p>
              </div>
              <div className="ml-7">
                <p className="font-normal">Região Trabalhada</p>
                <p className="text-black font-semibold">Costas</p>
              </div>
            </div>

            <div className="grid grid-cols-2 text-gray-500 mb-2">
              <div>
                <p className="font-normal">Tempo de Descanso</p>
                <p className="text-black font-semibold">60min</p>
              </div>
              <div className="ml-7">
                <p className="font-normal">Repetição</p>
                <p className="text-black font-semibold">4×10</p>
              </div>
            </div>

            <div className="text-gray-500 pb-13">
              <p className="font-normal">Descrição</p>
              <p className="text-black font-semibold">Trabalha os musculos musculares</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-gray-700 text-white hover:bg-gray-900 transition-colors duration-1000 w-[150px] h-[50px]">
                <img src={Editar} alt="Logo do lápis" className="w-[14px] h-[16px] inline-block mr-2" />
                Editar

              </button>
              <button className="cursor-pointer font-semibold px-4 py-1 rounded-lg bg-[#ff2d55] text-white hover:bg-red-600 transition-colors duration-1000 w-[150px] h-[50px]">
                <img src={Excluir} alt="Logo da Lixeixa" className="w-[14px] h-[16px] inline-block mr-2" />
                Excluir
              </button>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Home;
