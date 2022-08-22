import React from "react";
import Swiper from 'react-id-swiper';



export default function ReviewDemo() {
    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 150,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        // Responsive breakpoints
        breakpoints: {
            1499: {
                slidesPerView: 4
            },

            991: {
                slidesPerView: 3
            },

            767: {
                slidesPerView: 3

            },

            575: {
                slidesPerView: 2
            }
        }
    }

    let data = [
        { img: 'images/pic-1.png', logoLink: '/', name: "Pramod" },
        { img: 'images/pic-2.png', logoLink: '/', name: "Praveen" },
        { img: 'images/pic-3.png', logoLink: '/', name: "Papegowdas" },
        { img: 'images/pic-4.png', logoLink: '/', name: "Bhagya" },
        { img: 'images/pic-1.png', logoLink: '/', name: "Daya" },
        { img: 'images/pic-2.png', logoLink: '/', name: "Rathnamma" },
        { img: 'images/pic-3.png', logoLink: '/', name: "Shrinivas" },
        { img: 'images/pic-4.png', logoLink: '/', name: "Manu" }
    ];

    let DataList = data.map((val, i) => {
        return (
            <div className="swiper-slide brand-logo-slider__single border border-primary"
                style={{}} key={i}>
                <div class="card swiper-slide">
                    <div class="image-content">
                        {/* <span class="overlay"></span> */}
                        <div className="card-image">
                            <img src={`${val.img}`} className="img-fluid" alt="on" />
                        </div>
                        <div class="card-content">
                            <h2 class="name">{val.name}</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });


    return (
        <>
            <h1 class="heading"> clients
                <span> reviews</span> </h1>
            <div>
                {/*====================  brand logo area ====================*/}
                <div className={`brand-logo-slider-area section-space--inner--60`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* brand logo slider */}
                                <div className="brand-logo-slider__container-area">
                                    <Swiper {...params}>
                                        {DataList}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of brand logo area  ====================*/}
            </div>
        </>
    )
}
