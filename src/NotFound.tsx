
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-back ">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página Não Encontrada</h1>
      <img src={Meme} className='w-80' />
      <a href="/" className="text-blue-500 hover:underline pt-3.5">Voltar para a página inicial</a>
    </div>
  )
}

