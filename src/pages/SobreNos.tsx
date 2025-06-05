import sobrenos from '../assets/img/sobrenos.jpeg';
import logoGrupo from '../assets/img/logo_grupo.png';
import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";


function SobreNos() {
  return (
    <>
      <div className="px-8 py-12">
        <div className="flex items-center justify-center gap-12">
          <img
            src={sobrenos}
            alt="Imagem sobre nós"
            className="w-[400px] h-[400px] object-cover rounded-lg shadow"
          />
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-lime-600 mb-4">Sobre nós</h2>
            <p className="text-justify text-gray-700 leading-relaxed">
              A nossa aplicação nasceu da vontade de conectar pessoas que compartilham
              o mesmo objetivo de transformar a saúde e o bem-estar em prioridade. Em 2025,
              decidimos promover um ambiente seguro, colaborativo e consciente, onde cada treino
              é uma oportunidade de superação e incentivo mútuo. Valorizamos o acompanhamento
              personalizado, com foco na saúde física e na qualidade de vida, utilizando ferramentas
              como a avaliação do IMC (Índice de Massa Corporal) para ajudar nossos alunos a monitorarem
              sua evolução de forma segura e eficaz. acreditamos que com foco e objetivo claro é possível
              ter um estilo de vida mais saudável e sustentável.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-20 mt-30">
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium mb-2">Projeto desenvolvido por:</p>
            <img
              src={logoGrupo}
              alt="Logo Javason's Five"
              className="w-[220px] h-auto"
            />
          </div>
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold mb-4">Sobre a equipe:</h3>
            <p className="text-justify text-gray-700 leading-relaxed">
              Somos um grupo diverso de seis pessoas formadas no bootcamp da Generation Brasil.
              Cada um chegou aqui por um caminho diferente: alguns buscando uma nova carreira,
              outros dando os primeiros passos na tecnologia. Temos apaixonados por front-end,
              back-end, design e lógica, unidos pela vontade de aprender, crescer e transformar
              realidades.
              Nossa força está na pluralidade, no esforço coletivo e na paixão por criar
              soluções que fazem a diferença.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-12">Conheça o time</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                nome: "Elisa",
                foto: "src/assets/img/Elisa.jpg",
                github: "https://github.com/eblopes23",
                linkedin: "https://www.linkedin.com/in/elisa-bicudo-lopes/",
              },
              {
                nome: "Giulia",
                foto: "src/assets/img/Giulia.jpg",
                github: "https://github.com/Giulia-L-Ferreira",
                linkedin: "https://www.linkedin.com/in/giulia-l-ferreira/",
              },
              {
                nome: "Larissa",
                foto: "src/assets/img/Larissa.jpg",
                github: "https://github.com/LarissaSoaresSilva",
                linkedin: "https://www.linkedin.com/in/larissa-soares-da-silva/",
              },
              {
                nome: "Rodrigo",
                foto: "src/assets/img/Rodrigo.jpg",
                github: "https://www.linkedin.com/rodrigohenrikeh/",
                linkedin: "https://www.linkedin.com/in/rodrigohenrikeh/",
              },
              {
                nome: "Ruan",
                foto: "src/assets/img/Ruan.jpg",
                github: "https://github.com/BarretoRuan",
                linkedin: "https://www.linkedin.com/in/ruan-barreto/",
              },
              {
                nome: "Weslley",
                foto: "src/assets/img/Wesley.jpg",
                github: "https://github.com/wdwf",
                linkedin: "https://www.linkedin.com/in/weslleyferreira/",
              },

            ].map((membro, index) => (
              <div key={index} className="flex flex-col items-center hover:scale-105 transition-transform">
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  className="w-36 h-52 object-cover rounded-[30px] shadow-md"
                />
                <span className="mt-2 text-sm font-medium">{membro.nome}</span>

                {/* <div className="flex gap-2 mt-1">
                  <a href={membro.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl text-green-700 hover:text-green-900" />
                  </a>
                  <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl text-green-700 hover:text-green-900" />
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default SobreNos