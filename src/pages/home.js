import React from "react";
import Contact from "./contact";
import About from "./about";
import Benifits from "./benifits";
import PackagesList from "./PackagesList";
import LogoBrandSlider from "./logoBrandSlider";
import ReviewDemo from "./reviewDemo";
import LandingPage from "./LandingPage";
import Services from "./Services";
import ProjectCompleted from "./projectsCompleted";
import Footer from "./footer";
import Headers from "./headers";
import TestHeader from "./testHeader";
import OnGoingProject from "./ongoingProject";

export default function Home() {
    return (
        <div>
            <TestHeader />
            {/* <Headers /> */}
            <section class="home" id="home">
                <LandingPage />
            </section >
            <section class="about" id="about">
                <About />
            </section>
            <section class="Home_processcovers__1ZMZH">
                <Benifits />
            </section>
            <section class="services" id="services">
                <Services />
            </section>
            <section class="projects" id="projects">
                <ProjectCompleted />
            </section>
            <section class="projects" id="onGoing">
                <OnGoingProject />
            </section>
            <section class="reviews">
                <ReviewDemo />
            </section>
            <section class="pricing" id="pricing">
                <PackagesList />
            </section>
            <section class="contact" id="contact">
                <Contact />
            </section>
            <section class="logo-container">
                <LogoBrandSlider />
            </section>
            <section class="footer">
                <Footer />
            </section>
        </div >
    )
}