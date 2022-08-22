import React from 'react';
import Swiper from 'react-id-swiper';

export default function LogoBrandSlider() {


    const params = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
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
        { img: 'images/accCemet.webp', logoLink: '/' },
        { img: 'images/fixit.webp', logoLink: '/' },
        { img: 'images/image.webp', logoLink: '/' },
        { img: 'images/kamadenu.webp', logoLink: '/' },
        { img: 'images/accCemet.webp', logoLink: '/' },
        { img: 'images/fixit.webp', logoLink: '/' },
        { img: 'images/image.webp', logoLink: '/' },
        { img: 'images/kamadenu.webp', logoLink: '/' }
    ];

    let DataList = data.map((val, i) => {
        return (
            <div className="swiper-slide brand-logo-slider__single" key={i}>
                <div className="image text-center">
                    <a href={val.logoLink}>
                        <img src={`${val.img}`} className="img-fluid" alt="on" />
                    </a>
                </div>
            </div>
        )
    });


    return (
        <>
            <div class="row row-cols-2">
                <div class="col-4 column logobrandingBorder logoTextAlign">
                    <p class="logoPtag">We Choose</p>
                    <div>
                        <h3 class="brandingStyle">THE BEST
                            <span class="brandingStyle"> BRANDS</span>
                            <br></br> FOR YOU </h3>
                    </div>
                </div>
                <div class="logobrandingBorderImg">
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
                </div>
            </div>
        </>
    )
}
