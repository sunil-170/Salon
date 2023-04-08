import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Partner_btn from './Partner_btn';
const Join_us = () => {
    return (
        <section className=' py-5 affilate_bg d justify-content-center align-items-center'>
            <div className=' text-center py-5'>
                <p className=' ff_Jost fw_400 fs_2xl yellow pt-5'>Affiliate</p>
                <p className=' ff_Poppins fw_700 fs_8xl white join_text_w mx-auto lh-1'>Join Us Become a part of Us by
                    becoming an affiliate</p>
                <div className=' pt-4'>
                    <Partner_btn />
                </div>
            </div>

        </section>
    )
}

export default Join_us