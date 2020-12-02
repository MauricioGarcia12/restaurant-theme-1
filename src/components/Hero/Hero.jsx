import React,{useState} from 'react'
import { Navbar } from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { HeroContainer,HeroBtn,HeroContent
,HeroH1,HeroItem,HeroP } from './HeroElements'

export const Hero = () => {

    const [isOpen,setIsOpen]=useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 Seconds</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}
