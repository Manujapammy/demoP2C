import React from "react";
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default function Contact() {
    return (
        <>
            <h1 class="heading"> contact
                <span> us </span></h1>
            <div class="container contactBox">
                <div class="row">
                    <div class="col">
                        <h1 class="heading">  WHERE TO
                            <span> FIND US </span></h1>
                        <div class="row addressRow">
                            <div class="col">
                                <h4 class="contactAddressH4">Mandya Office</h4>
                                <span className="contactAddressSpan"><span>P2 Construction ,<br></br> </span>
                                    <span> Sri Raghavendra Complex, <span>1st floor, 100ft.Road, </span>
                                        <span>Near Hosahalli Circle, Mandya-571401</span></span></span>
                            </div>
                            <div class="col">
                                <h4 class="contactAddressH4">Malavalli Office</h4>
                                <span className="contactAddressSpan"><span>P2 Construction,<br></br> </span>
                                    <span> Opposite to kalamma temple, <span> Near KSRTC bus stand,</span>
                                        <span>Mallavalli tq, Mandya-571430</span></span></span>
                            </div>
                        </div>

                        <div>
                            <h1 className="heading">
                                STAY <span>CONNECTED</span>
                            </h1>

                            <div className="Home_contactinfos__3WQGA">
                                <div className="row text-center">

                                    {/* Mail section */}
                                    <div className="col-md-6">
                                        <div className="Home_contactdtcover__HCNHX">
                                            <div className="Home_leftctinfo__1V-0_">
                                                <div className="contactUsDiv1">
                                                    <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                        <img
                                                            alt="Email icon"
                                                            src="/images/Gmailimage.webp"
                                                            className="contactImageStyle"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Home_rightctinfo__2nWLG">
                                                <h4>Mail US</h4>
                                                <p>
                                                    <a href="mailto:p2constructionmandya@gmail.com" style={{ fontSize: "larger" }}>
                                                        p2constructionmandya@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact section */}
                                    <div className="col-md-6">
                                        <div className="Home_contactdtcover__HCNHX">
                                            <div className="Home_leftctinfo__1V-0_">
                                                <div className="contactUsDiv1">
                                                    <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                        <img
                                                            alt="Phone icon"
                                                            src="/images/callUsimage.webp"
                                                            className="contactImageStyle"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Home_rightctinfo__2nWLG">
                                                <h4>Contact Us</h4>
                                                <p>
                                                    <a href="tel:+9198073096564">(91) 8073096564</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col paddingFree" >
                        <form>
                            <h3>Get a <span> Free Consultation </span> </h3>
                            <div class="row">
                                <div class="col">
                                    <input type="text"
                                        style={{ fontFamily: "FontAwesome" }}
                                        class="contactFormInput" placeholder="&#xf007; Enter Name" name="Name" />
                                </div>
                                <div class="col">
                                    <input type="email" style={{ fontFamily: "FontAwesome" }}
                                        class="contactFormInput"
                                        placeholder="&#xF199; Enter Email" name="email" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text"
                                        style={{ fontFamily: "FontAwesome" }}
                                        class="contactFormInput" placeholder="&#xf041; Your Location" name="location" />
                                </div>
                                <div class="col">
                                    <input type="text"
                                        style={{ fontFamily: "FontAwesome" }}
                                        class="contactFormInput" placeholder="&#xf095; Your Phone Number" name="PhoneNmber" />
                                </div>
                            </div>
                            <textarea name=""
                                style={{ fontFamily: "FontAwesome" }}
                                placeholder="How can we help you...." class="contactFormInput" id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="send message" class="p2ButtonStyle"></input>
                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}