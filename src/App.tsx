import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify"
import { AuthProvider } from "./contexts/AuthContext"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<p>Cadastro</p>} />
              <Route path="/login" element={<Login />} />
              <Route path="/regiao" element={<p>temas</p>} />
              <Route path="/cadastrar-regiao" element={<p>Cadastro de região</p>} />
              <Route path="/editar-regiao/:id" element={<p>editar região</p>} />
              <Route path="/deletar-/:id" element={<p>deletar região</p>} />
              <Route path="/treino" element={<p>treinos</p>} />
              <Route path="/cadastrar-treino" element={<p>cadastrar treino</p>} />
              <Route path="/editar-treino/:id" element={<p>editar</p>} />
              <Route path="/deletar-treino/:id" element={<p>deletar treino</p>} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="*" element={<p>Not Found</p>} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
