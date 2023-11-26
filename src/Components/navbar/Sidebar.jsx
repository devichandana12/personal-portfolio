import React, { useState } from 'react'
import "../../App.css"
import { SidebarData, SidebarIcon } from './SidebarData'
import { Close } from '@mui/icons-material'
import { Menu, User } from 'react-feather'
import resume from '../../Assets/resume.pdf'


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isContactOpen, setContactOpen] = useState(false);


    const [show, setShow] = useState(false);





    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    const handleResume = () => {
        window.open(resume, "_blank")
    }
    const contactOpen = () => {
        setContactOpen(true);
        setShow(true);
    };

    const contactClose = () => {
        setContactOpen(false);
        setShow(false);
    };

    return (




        <>
            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    onClick={contactOpen}
                    className="contactbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                >
                    Contact Me<User style={{ marginLeft: '15px' }} />
                </button>
            </div>
            <div className="close" onClick={toggleSidebar}>
                {isSidebarOpen ? <Close /> : <Menu />}
            </div>
            <div className={`sidebar_section ${isSidebarOpen ? 'menu-open' : ''}`}>



                <ul className='SidebarList'>
                    {SidebarData.map((val, key) => {
                        return <li

                            key={key}
                            className='SidebarRow'
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                if (val.title === 'Resume') {
                                    handleResume();
                                } else {
                                    window.location.pathname = val.link
                                }
                            }}
                        >
                            <div id='Icon'>
                                {val.icon}
                            </div>
                            <div id='Title'>
                                {val.title}
                            </div>



                        </li>


                    })}





                </ul>
                <ul className="SidebarList">
                    <div className="mt-2 SidebarHead">Socials</div>
                    {SidebarIcon.map((val, key) => {
                        return <li className='SidebarRow'
                            key={key}
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => window.open(val.link, "_blank")}

                        >

                            <div id='Icon'>
                                {val.icon}
                            </div>
                            <div id='Title'>
                                {val.title}
                            </div>

                        </li>

                    })}
                </ul>

            </div>
            {/* conatct opn an close */}
            {isContactOpen && (
                <Modal
                    show={show}
                    onHide={contactClose}
                    backdropClassName="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Welcome! If you've landed here, you're in for a journey through my tech world. Whether you're exploring or have questions, feel free to drop me a line at <a href='mailto:devichandana1704@gmail.com'>devichandana1704@gmail.com</a>. Let's dive into the tech wonders together
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={contactClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>


    )
}

export default Sidebar