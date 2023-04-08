import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Book_button from './components/Book_button';
import umar_usman from './assets/image/png/umar-usman.png'
import rabia_khalil from './assets/image/png/rabia.png'
import star from './assets/image/png/star.png'
const Testimonals = () => {
    return (
        <section>
            <Container>
                <Row className=' py-5'>
                    <Col xs={12} lg={5}>
                        <div>
                            <p className=' ff_Jost fw_400 fs_2xl yellow'>Testimonials</p>
                            <p className=' ff_Poppins fw_700 fs_9xl black pe-lg-5 lh-1'>What Our Clients
                                Say About Us</p>
                            <p className=' ff_Jost fw_400 fs_2xl gray2 pe-lg-5'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
                        </div>
                        <Book_button any_text="Give Reviews" />
                    </Col>

                    <Col xs={12} lg={7} className='pt-4 pt-lg-0'>
                        <Row>
                            <Col lg={6} md={6}>
                                <div className='umar_box text-center mx-auto'>
                                    <img src={umar_usman} alt="" />
                                    <p className=' ff_Poppins fw_700 fs_sm gray4 pt-3'>It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it </p>
                                    <img src={star} alt="" />
                                    <p className=' ff_Poppins fw_700 fs_md black pt-2 mb-0'>Umar Usman</p>
                                    <p className=' ff_Poppins fw_700 fs_ss gray3 mb-0'>Regular User</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} className=' pt-4 pt-md-0'>
                                <div className='umar_box text-center mx-auto'>
                                    <img src={rabia_khalil} alt="" />
                                    <p className=' ff_Poppins fw_700 fs_sm gray4 pt-3'>It was an amazing experience to get
                                        services from the best in its profession
                                        Absolutly Enjoyed Every SEcond of it </p>
                                    <img src={star} alt="" />
                                    <p className=' ff_Poppins fw_700 fs_md black pt-2 mb-0'>Rabia Khalil</p>
                                    <p className=' ff_Poppins fw_700 fs_ss gray3 mb-0'>Regular User</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Testimonals