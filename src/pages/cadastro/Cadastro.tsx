function Cadastro() {
  return (
    <div className="flex min-h-screen">
        <div className="w-1/2 bg-white flex flex-col justify-center items-center px-12">
        <div className="w-full max-w-md">
<div className="mb-8">
<span className="bg-black text-white px-2 py-1 text-sm rounded font-bold">✔️ FITLAB</span>

</div>

<h2 className="text-3xl font-bold mb-6">Cadastro</h2>

<form className="flex flex-col gap-4">
            <input type="text" placeholder="Nome" className="border p-2 rounded" />
            <input type="email" placeholder="Email" className="border p-2 rounded" />
            <input type="password" placeholder="Senha" className="border p-2 rounded" />
            

            <div className="flex gap-4">
              <input type="text" placeholder="Altura" className="border p-2 rounded w-1/2" />
              <input type="text" placeholder="Peso" className="border p-2 rounded w-1/2" />
            </div>

            <button type="submit" className="bg-lime-500 hover:bg-lime-600 text-white py-2 rounded font-semibold">
              Cadastrar
            </button>
            </form>
            <p className="text-sm mt-4">
            Já tem uma conta?{' '}
            <a href='/login' className="text-black font-semibold underline">
              Acessar
            </a>
          </p>

        </div>

        </div>

        <div className="w-1/2 h-screen bg-cover bg-no-repeat bg-position-[center_top_-79px] relative bg-[url(https://cdn.discordapp.com/attachments/1361772055749595277/1380028753631252550/7-dicas-para-ter-melhores-resultados-na-academia-2048x1365.png?ex=6842636e&is=684111ee&hm=81a328ab7d74b220efc4cf21f8f45103d94679fef9f1e028f223425507e6533b&)] "> 
        <div className="absolute bottom-8 left-8 text-white text-xl max-w-sm">
          <p>
            Encontre o equilíbrio entre o desenvolvimento do software <br /> e do seu corpo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
