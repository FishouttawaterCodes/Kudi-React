import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { HomeObjOne, HomeObjThree, HomeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Topbar from '../components/Topbar'

const Home = () => {
 const [isOpen, setIsOpen] = useState(false)

 const toggle = () => {
  setIsOpen(!isOpen)
 };



 return (
  <>
   <Topbar isOpen={isOpen} toggle={toggle} />
   <Navbar toggle={toggle} />
   <HeroSection />
   <InfoSection {...HomeObjOne} />
   <InfoSection {...HomeObjTwo} />
   <Services />
   <InfoSection {...HomeObjThree} />
   <Footer />
  </>
 )
}

export default Home
