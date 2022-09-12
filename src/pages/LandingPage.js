import React from "react";

export default function LandingPage() {
    return (
        <>
            <div class="swiper home-slider">
                <div class="swiper-wrapper">
                    <section class="swiper-slide slide" style={{ background: "url(images/homeImg.jpg) no-repeat" }}>
                    <div class="content" style={{
                            animationName: "moveInleft",
                            animationDuration: "3s"
                        }}>
                            <h3 className="responsive-font-example">DREAM
                                <span> HOME</span> CONSTRUCTION</h3>
                            <p>ON TIME. WITHIN BUDGET. QUALITY BACKED BY WARRANTY</p>
                            <a href="#about" class="p2ButtonStyle">get started</a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}