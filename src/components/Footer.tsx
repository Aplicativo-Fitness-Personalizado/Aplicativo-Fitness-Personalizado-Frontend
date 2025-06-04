import { Link } from "react-router"
import Logo from "../assets/Logo.png"
import Generation from "../assets/Generation.png"
function Footer() {
  return (
    <>
        <div className="flex justify-center bg-white">
            <Link to="/" className="flex items-center space-x-2">
                <img src={Logo} className="min-w-[100px] w-24 min-h-8 px-2" alt="Logo Fit Lab"/>
                <h6 className="font-family text-text-tertiary text-sm">em parceria com</h6>
                <img src={Generation} className="min-w-[100px] w-24 min-h-8 px-2" alt="Logo Fit Lab"/>
            </Link>

        </div>
    </>
  )
}
  export default Footer