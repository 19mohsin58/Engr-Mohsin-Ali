import {React , useState} from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Slider from '../components/SliderSection/Slider';
import { homeObjOne , homeObjTwo} from '../components/SliderSection/SliderData';
import { Services } from '../components/Services/Services';
import {Box} from '../components/Boxes/Box'
import Footer from '../components/Footer/Footer';
import Testinomial from '../components/Testinomials/Testinomial'
import  {TestiData} from '../components/Testinomials/TestiData'
import ScrollTop from '../components/ScrollTop/ScrollTop';

import AppRouter from '../components/Portfolio/router'
import Index from '../components/Portfolio';
import Contact from '../components/Contact/Contact';


const Home = () => {
const [isOpen , setIsOpen] = useState(false)

const toggle =() =>{
    setIsOpen(!isOpen)
}


    return (
        <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
   
    <Slider {...homeObjOne}/>
     < ScrollTop />
    <Box />
    <Slider {...homeObjTwo}/>
    
    
    <Services />
        <Index />
        <AppRouter />
        <Contact />
    <Testinomial/>
    
    <Footer />
    
        </>
    )
}

export default Home
