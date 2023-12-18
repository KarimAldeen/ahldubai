import React from 'react'
import HeroSection from '../../Components/NewHome/HeroSection'
import Services from '../../Components/Home/Services'
import AboutUs from '../../Components/Home/AboutUs'
import Questions from '../../Components/Home/Questions'
import Contact from '../../Components/Home/Contact'
import CursorBlob from '../../Components/CursorBlob'
import GetQuote from '../../Components/NewHome/GetQuote'
import FloatNav from '../../Layout/Ui/FloatNav'
import Clients from '../../Components/NewHome/Clients'
import Travel from '../../Components/NewHome/Travel'
import Doctors from '../../Components/NewHome/Doctors'

const Page = () => {
  return (
    <>
    {/* <HeroSection/>
    <Services/>
    <AboutUs/>
   
    <Contact/>
    <CursorBlob/> */}
    <HeroSection/>
    <GetQuote/>
    <Clients/>
    <Services/>
    <Travel/>
    <Doctors/>
    <FloatNav/>
    <Questions/>
    <CursorBlob/> 
    
    </>
  )
}

export default Page