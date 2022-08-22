import React from "react";

export default function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <>
            <div>
                <div class="box-container">
                    <div class="logo">
                        <img src="images/p2plogo.jpg" class="logo" style={{ width: "25%" }} alt="" />
                        <p class="footerDesc"
                        >P2Construction® Engineering Services is a Product Development Startup and integrated B2B Marketplace which makes On-Demand custom manufacturing services quick, risk-free and affordable for OEM’s, SME’s and Startups.</p>
                    </div>
                    <div>
                        <h2 class="footerheading">USEFUL LINKS</h2>
                        <ul class="footerUl">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#pricing">packages</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="footerheading">CONTACT</h2>
                        <div className="contact-information">
                            <ul>
                                <li>
                                    <span className="icon"><i className="fa fa-map-marker" /></span>
                                    <span className="text"><span>P2 Construction , </span>
                                        <span> Stock Building, Hosahalli, Mandya, Karnataka, India</span></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-phone" /></span>
                                    <span className="text"><a href="tel:9742131171">(91) 9742131171</a><a href="tel:8073096564">(91) 8073096564</a></span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa fa-envelope" /></span>
                                    <span className="text"><a href="mailto:p2Construction@gmail.com">P2Construction@gmail.com</a><a href="mailto:info@example.com">info@example.com</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-wrapper">
                    <div className="footer-copyright text-center">
                        Copyright © {currentYear}. All right reserved
                    </div>
                </div>
            </div>

        </>
    )
}