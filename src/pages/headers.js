import React from "react";

export default function Headers() {
    return (
        <>
            <header class="header">
                <div>
                    <a href="#home">
                        <img src="images/p2plogo.jpg"
                            alt="logo" class="modal-sm w-50" />
                    </a>
                </div>
                <nav class="navbar"
                >
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#pricing">Packages</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </nav>
                <div>
                    <a href="#contact" class="p2ButtonStyle btnwidth">GET FREE CONSULTANT</a>
                </div>
            </header>

        </>
    )
}