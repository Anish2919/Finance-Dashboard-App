import Navbar from "@/scenes/navbar"
import { Outlet} from "react-router-dom"

const Layout = () => {
    return (
      <>
        <Navbar /> 
        <Outlet /> 
      </>
    )
  }

export default Layout; 