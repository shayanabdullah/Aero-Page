import React from 'react'
import Images from './Images'
import startup from '../assets/startup.png'
import { Col, Container, Row } from 'react-bootstrap'
import Buttons from './Buttons'
import Banner from '../assets/banner.png'
import card from '../assets/Group 1.png'
const Hero = () => {
    return (
        <section className='pt-[94px] pb-[139px]'>
            <Container>
            <div className="banner-section pb-[109px]">
            <Row>
                    <Col lg={6}>
                        <Images src={startup} className='cursor-pointer' />
                        <div className="banner-text">
                            <h1 className='font-[ROBOTO] font-medium text-[36px]! lg:w-[456px] pt-[35px] pb-[32px] '>Empowering startups to fuel
                                their business growth</h1>
                            <p className='text-lg font-regular font-[ROBOTO] pb-[37px] lg:w-[526px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                                velit
                                nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                                <Buttons text="Get started now"  className="py-[9px] pr-[23px] pl-[33px] font-[ABeeZee] rounded-[5px]! hover:bg-transparent duration-300 hover:text-black! border-2! border-white! border-solid hover:border-[#EA580C]!"/>
                        </div>
                    </Col>
                    <Col lg={6}>
                    <div className="banner-img flex lg:flex-row-reverse md:justify-center">
                       <Images src={Banner} />
                        </div>
                        </Col>
                </Row>
            </div>
            <div className="cards flex gap-x-[97px] flex-wrap gap-y-[50px]">
            <Images src={card}/>
            <Images src={card}/>
            <Images src={card}/>
            </div>
            </Container>
        </section>
    )
}

export default Hero