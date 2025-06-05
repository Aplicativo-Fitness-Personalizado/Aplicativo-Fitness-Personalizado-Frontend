import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext"

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Router>
          {/* Colocar Navbar aqui */}
          <div>
            <Routes>
              <Route path="/" element={<p>Login</p>} />
              <Route path="/home" element={<p>home</p>} />
              <Route path="/cadastro" element={<p>Cadastro</p>} />
              <Route path="/login" element={<p>Login</p>} />
              <Route path="/regiao" element={<p>temas</p>} />
              <Route path="/cadastrar-regiao" element={<p>Cadastro de região</p>} />
              <Route path="/editar-regiao/:id" element={<p>editar região</p>} />
              <Route path="/deletar-/:id" element={<p>deletar região</p>} />
              <Route path="/treino" element={<p>treinos</p>} />
              <Route path="/cadastrar-treino" element={<p>cadastrar treino</p>} />
              <Route path="/editar-treino/:id" element={<p>editar</p>} />
              <Route path="/deletar-treino/:id" element={<p>deletar treino</p>} />
              <Route path="/perfil" element={<p>Perfil</p>} />
              <Route path="*" element={<p>Not Found</p>} />
            </Routes>
          </div>
          {/* Colocar Footer aqui */}
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
