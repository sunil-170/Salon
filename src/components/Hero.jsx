import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Mynavbar from './Mynavbar';
import Book_button from './Book_button';
import All_service from './All_service';
import hero_img from '../assets/image/png/hero_img.png'

const Hero = () => {
  return (
    <header className='black_bg min-vh-100 d-flex flex-column position-relative'>
      <Mynavbar />

      <Container className=' d-flex flex-grow-1 align-items-center'>
        <Row>
          <Col xs={12} lg={6}>
            <h1 className=' ff_Jost fw_400 fs_lg yellow'>Welcome To Choppers</h1>
            <p className=' ff_Poppins fw_700 fs_9xl white lh-1 pt-3'>Best Hair Salon For A
              Professional Look</p>
            <p className=' ff_Poppins fw_400 fs_4xl lightwhite choppers_wdth_lg'>Choppers offers high performance customized facials to provide you with visible results.</p>
            <div className=' d-flex pt-5 flex-column flex-md-row text-center text-md-start'>
              <Book_button any_text="Book Now" />
              <div className=' ps-md-5 pt-4 pt-md-0 '>
                <All_service />
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <img className=' position-absolute end-0 bottom-0 hero_cut d-none d-lg-block' src={hero_img} alt="" />
          </Col>
        </Row>
      </Container>

      <img className='img-fluid end-0 bottom-0  d-lg-none' src={hero_img} alt="" />
    </header>
  )
}

export default Hero