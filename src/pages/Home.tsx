import LogoBanner from "../assets/img/LogoBanner.png";
import LogoBalanca from "../assets/img/LogoBalanca.png";
import LogoRegiao from "../assets/img/LogoRegiao.png"
import LogoTreino from "../assets/img/LogoTreino.png";
import ListaTreino from "../components/listatreino/ListaTreino";
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

        <ListaTreino />

      </div>
    </>
  );
}

export default Home;
