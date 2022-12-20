import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>O platformie</Heading>
            <FooterLink href="/info">O nas</FooterLink>
            <FooterLink href="/kontakt">Kontakty</FooterLink>
            <FooterLink href="https://agencjapracypiotrkow.pl/">Nasz partner</FooterLink>
            <FooterLink href="#"></FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/">Nasze projekty</FooterLink>
            <FooterLink href="/">Na co my zbieramy</FooterLink>
            <FooterLink href="#"> </FooterLink>
            <FooterLink href="#"> </FooterLink>
          </Column>
          <Column>
            <Heading>Inne</Heading>
            <FooterLink href="/paypal">Metody oplaty</FooterLink>
            <FooterLink href="https://drive.google.com/file/d/1C-6_nqb_u4H2pqMT71YI0ZT_LAjGftgb/view?usp=share_link">Polityka prywatności</FooterLink>
            <FooterLink href="#"> </FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/International-Foundation-of-Social-Assistance-106928068777155">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/mfps.world/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCA6H2Us3D_kAy4KZqoOxKYA">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.tiktok.com/@MFPS_Pomaga">
              <i className="fab fa-tiktok">
                <span style={{ marginLeft: "10px"}}>
                  TikTok
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;