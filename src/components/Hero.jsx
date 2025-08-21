import React from 'react'
import Images from './Images'
import startup from '../assets/startup.png'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'
import Banner from '../assets/banner.png'
import card from '../assets/Group 1.png'
import Cards from './Cards'
const Hero = () => {
    return (
        <section className='lg:pt-[94px] lg:pb-[139px] hero'>
            <Container>
            <div className="banner-section pb-[109px]">
            <Row className='w-full'>
                    <Col lg={5}>
                        <Images src={startup} className='cursor-pointer pl-[20px]' />
                        <div className="banner-text ">
                            <h1 className='font-[ROBOTO] font-medium text-[36px]! lg:w-[456px] lg:pt-[35px] lg:pb-[32px] '>Empowering startups to fuel
                                their business growth</h1>
                            <p className='text-lg font-regular font-[ROBOTO] pb-[37px] lg:w-[526px] pr-[10px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                                velit
                                nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                                <Buttons text="Get started now"  className="py-[9px] pr-[23px] pl-[33px] font-[ABeeZee] rounded-[5px]! hover:bg-transparent duration-300 hover:text-black! border-2! border-white! border-solid hover:border-[#EA580C]!"/>
                        </div>
                    </Col>
                    <Col lg={{span:6, offset:1 }} className='w-full'>
                    <div className="banner-img flex w-full">
                       <Images src={Banner} className='w-full'/>
                        </div>
                        </Col>
                </Row>
            </div>
            <div className="cards flex lg:gap-x-[52px] md:gap-x-[20px] flex-wrap gap-y-[50px]">
             <Cards/>
             <Cards/>
             <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>    
            </div>
            </Container>
        </section>
    )
}

export default Hero