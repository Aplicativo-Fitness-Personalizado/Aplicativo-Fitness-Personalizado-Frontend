import { Link } from "react-router"
import Logo from "../assets/Logo.png"
import Generation from "../assets/Generation.png"
function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 bg-white py-6 border-t border-gray-300">
      <Link to="/home" className="flex items-center space-x-2">
        <img src={Logo} className="min-w-[100px] w-24 min-h-8 px-2" alt="Logo Fit Lab" />
      </Link>
      <h6 className="font-family text-text-tertiary text-sm">em parceria com</h6>
      <Link to={"https://brazil.generation.org/"}>
        <img src={Generation} className="min-w-[100px] w-24 min-h-8 px-2" alt="Logo Fit Lab" />
      </Link>
    </div>
  )
}
export default Footer