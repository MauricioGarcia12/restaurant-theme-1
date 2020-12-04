import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap
} from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube

} from 'react-icons/fa'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Footer
