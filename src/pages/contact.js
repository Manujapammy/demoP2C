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
                                <h4 class="contactAddressH4">Bangalore Office</h4>
                                <span className="contactAddressSpan"><span>P2 Construction,<br></br> </span>
                                    <span> 401/A, 80 feet road, <span> Hoysala Circle,  </span>
                                        <span>K S town, Bangalore-560060</span></span></span>
                            </div>
                        </div>
                       
                        <div>
                            <h1 class="heading"> STAY
                                <span> CONNECTED </span></h1>
                            <div class="Home_contactinfos__3WQGA">
                                <div class="row">
                                    <div class="col">
                                        <div class="Home_contactdtcover__HCNHX">
                                            <div class="Home_leftctinfo__1V-0_">
                                                <div class="contactUsDiv1">
                                                    <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true" role="presentation"
                                                            src="/images/Gmailimage.webp"
                                                            class="contactImageStyle"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Home_rightctinfo__2nWLG">
                                                <h4>Mail us at</h4>
                                                <p>
                                                    <a href="mailto:p2constructionmandya@gmail.com" 
                                                    style={{fontSize:"larger"}}>p2constructionmandya@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="Home_contactdtcover__HCNHX">
                                            <div class="Home_leftctinfo__1V-0_">
                                                <div class="contactUsDiv1">
                                                    <div style={{ boxSizing: "border-box", display: "block", maxWidth: "100%" }}>
                                                        <img alt="" aria-hidden="true"
                                                            role="presentation"
                                                            src="/images/callUsimage.webp"
                                                            class="contactImageStyle"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Home_rightctinfo__2nWLG">
                                                <h4>Contact Us</h4>
                                                <p><a href="tel:+919742131171">(91) 8073096564</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="contact-information">
                            <ul>
                                <li>
                                    <span className="icon" >
                                        <LocationMarkerIcon style={{ height: "40%", width: "-webkit - fill - available" }} />
                                    </span>
                                    <h3 className="text text-light"> Address</h3>
                                     <span className="text"><span>P2 Construction , </span>
                                        <span> Stock Building, Hosahalli, Mandya, Karnataka, India</span></span> 
                                </li>
                                <li>
                                    <span className="icon">
                                        <PhoneIcon />
                                    </span>
                                    <span className="text"><a href="tel:9742131171">(91) 9742131171</a><a href="tel:8073096564">(91) 8073096564</a></span>
                                </li>
                                <li>
                                    <span className="icon">
                                        <MailIcon />
                                    </span>
                                    <span className="text"><a href="mailto:p2constructionmandya@gmail.com">p2constructionmandya@gmail.com</a><a href="mailto:info@example.com">info@example.com</a></span>
                                </li>
                            </ul>
                        </div> */}
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