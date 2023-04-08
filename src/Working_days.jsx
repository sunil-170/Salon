import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Work_img from '../src/assets/image/png/working-days.png'
import Book_btn2 from './components/Book_btn2';
const Working_days = () => {
    return (
        <section>
            <Container className=' py-5 pt-5'>
                <div className=' work_box'>
                    <Row className=' align-items-center'>
                        <Col xs={12} lg={6}>
                            <img className=' w-100' src={Work_img} alt="" />
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className=' px-4 py-3 py-lg-0 '>
                                <p className=' ff_Poppins fw_700 fs_7xl white mb-0 ps-3'>WORKING DAYS</p>
                                <p className=' ff_jost fw_400 fs_2xl black'>We are open on all six days in a week </p>
                                <div className=' d-flex monday_wdth justify-content-between align-items-center pt-3'>
                                    <p className=' ff_Poppins fw_700 fs_lg white mb-0'>Monday</p>
                                    <p className=' ff_Poppins fw_400 fs_sm black mb-0'>9Am to 10pm</p>
                                </div>
                                <div className=' d-flex monday_wdth justify-content-between align-items-center pt-4'>
                                    <p className=' ff_Poppins fw_700 fs_lg white mb-0'>Friday</p>
                                    <p className=' ff_Poppins fw_400 fs_sm black mb-0'>9Am to 10pm</p>
                                </div>
                                <div className=' pt-5'> <Book_btn2 />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Working_days