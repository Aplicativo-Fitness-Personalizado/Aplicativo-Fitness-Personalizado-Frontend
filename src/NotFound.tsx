import Meme from "../src/assets/img/meme.jpg"


export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background ">
      <h1 className="text-4xl font-bold text-primary mb-4">404 - Página Não Encontrada</h1>
      <p className="text-primary font-extrabold text-3xl mb-4">Falha na execução do exercício e falha na criação da página!</p>
      <img src={Meme} className='w-130 h-130 mb-4' />
      <a href="/" className="text-text-secundary hover:underline pt-3.5 mb-4 ">Voltar para a página inicial</a>
    </div>
  )
}

