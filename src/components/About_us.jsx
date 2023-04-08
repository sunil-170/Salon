import React from 'react'
import best_img from '../assets/image/png/best-img.png'
import { Container, Row, Col } from 'react-bootstrap';
import Book_button from './Book_button';
const About_us = () => {
    return (
        <section className='section_2_bg_img py-3'>
            <Container className='py-5 mt-5'>
                <Row className=' align-items-center'>
                    <Col xs={12} lg={6}>
                        <div>
                            <img className=' img-fluid' src={best_img} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div>
                            <p className=' ff_jost fw_400 fs_2xl yellow'>About Us</p>
                            <p className=' ff_Poppins fw_700 fs_9xl black hair_wdth_lg lh-1'>Best Haircut Salon
                                For Men</p>
                            <p className=' ff_Jost fw_400 fs_2xl gray1 let_wdth_lg'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                            <Book_button any_text="Read More" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About_us