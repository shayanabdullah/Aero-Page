import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import Images from './Images'
import Logo from "../assets/logo.png"
import buttnLogo from "../assets/button-logo.png"
import Buttons from './Buttons'
const Menu = () => {
  return (
  <section>
    <Navbar expand="lg" className="bg-white!">
      <Container>
        <Navbar.Brand href="#home">
            <Images src={Logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >    
          <Nav className="flex! gap-x-[83px] ml-[133px] ">
            <Nav.Link href="#home" className='font-[REM] text-[16px]! text-[#0B0B0B]! font-medium hover:text-[#EA580C]! duration-300'>Home</Nav.Link>
            <Nav.Link href="#link"className='font-[REM] text-[16px]! text-[#0B0B0B]! font-medium hover:text-[#EA580C]! duration-300' >About</Nav.Link>
            <Nav.Link href="#link" className='font-[REM] text-[16px]! text-[#0B0B0B]! font-medium hover:text-[#EA580C]! duration-300'>Service</Nav.Link>
            <Nav.Link href="#link" className='font-[REM] text-[16px]! text-[#0B0B0B]! font-medium hover:text-[#EA580C]! duration-300'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Buttons  img={buttnLogo}  text='Download' className="py-[14px] px-[45px] flex items-center gap-x-[27px] rounded-[20px]! hover:bg-transparent duration-300 hover:text-black! border-2! border-white! border-solid hover:border-[#EA580C]! "/>
      </Container>
    </Navbar>
  </section>
  )
}

export default Menu