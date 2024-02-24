import Footer from "@/components/NavFoot/Footer";
import Navbar from "@/components/NavFoot/Navbar";
import { LayoutProps } from "@/utils/types";
import React from 'react'

const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <>
    
    <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout