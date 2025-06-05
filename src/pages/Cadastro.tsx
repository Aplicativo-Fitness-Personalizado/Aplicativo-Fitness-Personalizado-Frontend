import { Link } from "react-router";
import Logo from "../assets/Logo.png"


function Cadastro() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center py-12">
        <div className="w-full max-w-md">
          <div className="flex items-left mb-6">
            <img src={Logo} alt="Logo Fitlab" className="h-12" />
          </div>

          <h2 className="text-text text-4xl font-bold text-left mb-4">Cadastro</h2>

          <form>
            <div className="mb-4">
              <label className="block text-text mb-1">Nome</label>
              <input
                type="text"
                placeholder="Fulano da Silva"
                className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-text mb-1">Email</label>
              <input
                type="email"
                placeholder="Exemplo@email.com"
                className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label className="block text-text mb-1">Senha</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex gap-4">
              <div className="mb-4">
                <label className="block text-text mb-1">Altura</label>
                <input
                  type="text"
                  placeholder="1.75"
                  className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-1">Peso</label>
                <input
                  type="text"
                  placeholder="90"
                  className="w-full px-4 py-2 text-text-secundary border-4 border-border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-text font-semibold py-2 rounded transition cursor-pointer"
            >
              Cadastrar
            </button>
          </form>
          <p className="text-center text-text-tertiary mt-6">
            Já tem uma conta?
            <Link to="/login" className="text-black font-semibold hover:underline inline-flex items-center gap-1">
              Acessar <span>→</span>
            </Link>
          </p>

        </div>

      </div>

      <div className="w-1/2 bg-cover bg-no-repeat bg-position-[center_top_-79px] relative bg-[url(https://cdn.discordapp.com/attachments/1361772055749595277/1380028753631252550/7-dicas-para-ter-melhores-resultados-na-academia-2048x1365.png?ex=6842636e&is=684111ee&hm=81a328ab7d74b220efc4cf21f8f45103d94679fef9f1e028f223425507e6533b&)] ">
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
