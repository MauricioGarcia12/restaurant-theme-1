import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { HeroContainer,HeroBtn,HeroContent
,HeroH1,HeroItem,HeroP } from './HeroElements'

export const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
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
