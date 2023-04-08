import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/image/png/Logo.png'
import Book_button from './Book_button';

const Mynavbar = () => {
    return (
        <header className='black_bg'>

            <nav className='py-5'>
                <Container>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a className='' href="#"><img src={logo} alt="" /></a>

                        <input type="checkbox" id='check' className=' d-none' />

                        <label htmlFor="check" className='d-lg-none'>
                            <span className=' d-flex flex-column'>
                                <span className='line'></span>
                                <span className='line'></span>
                                <span className='line'></span>
                            </span>
                        </label>
                        <ul className=' d-flex align-items-center list-unstyled laft0'>
                            <li className=''><a className=' ff_Poppins fw_700 fs_md white nav_hvr' href="#">Home</a></li>
                            <li className=' ps-lg-5  pt-5 pt-lg-0'><a className=' ff_Poppins fw_700 fs_md white nav_hvr' href="#">About Us</a></li>
                            <li className=' ps-lg-5 pt-5 pt-lg-0'><a className=' ff_Poppins fw_700 fs_md white nav_hvr' href="#">Services</a></li>
                            <li className=' ps-lg-5 pe-lg-5 pt-5 pt-lg-0 pb-5 pb-lg-0'><a className=' ff_Poppins fw_700 fs_md white nav_hvr' href="#">Contact</a></li>
                            <Book_button any_text="Book Now" />
                        </ul>
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Mynavbar