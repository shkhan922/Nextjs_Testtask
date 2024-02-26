import Image from "next/image";
import Header from '../app/components/header'
import Breadcumb from './components/breadcumb'
import Footer from '../app/components/footer'
import Hero from './components/hero'
import Menu from './components/menu'

export default function Home() {
  return (
   <>
   <Header/>
   <Menu/>
   <Breadcumb/>
   <Hero/>
   <Footer/>
   </>
  );
}
