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
        { img: 'images/5-Star-Rating-PNG.png', logoLink: '/', name: "Manjunath", desc:"The quality of construction is very good. And I’m Very happy With. Mr Praveen sir work. They are Very responsible and they do. Work On time. Thank You and i’m very happy. And satisfied" },
        { img: 'images/pic-2.png', logoLink: '/', name: "Punith G", desc:"The most trusted, valued, cost effective, budget friendly, quality materials being used in all stages till project completion with excellent management skills." },
        { img: 'images/pic-3.png', logoLink: '/', name: "Nithin kumar", desc :"Best construction company in Mandya. the will complete the work within the given time. had a great experience with them. PRAVEEN is very professional, and punctual and gives 100% commitment to his work!!"},
        { img: 'images/pic-4.png', logoLink: '/', name: "Rakshith Kumar", desc:"Their clear communication throughout the process made us feel involved and well-informed every step of the way. We couldn't be happier with the results and highly recommend them for any construction needs." },
        { img: 'images/pic-1.png', logoLink: '/', name: "Manasa", desc :"One of the very few builders who also undertakes interior projects along with the construction, we are very happy because he understood the requirment, budget and delivered project on time without compromising quality," },
        { img: 'images/pic-2.png', logoLink: '/', name: "Madhu Kumar" , desc :"Amazed with the kind of design n service with respect to interiors work . Very good hospitality shown by the P2 construction & team . Thanks for being coordinated at each step"},
        { img: 'images/pic-3.png', logoLink: '/', name: "Shibiya Thomas", desc :"Exceptional service They've delivered project on time and I'm really happy with their approach and service. I'm totally satisfied with their service and pricing, I highly recommend P2 Construction" },
        { img: 'images/pic-4.png', logoLink: '/', name: "Pallavi", desc:"Best construction company in mandya.They will complete the work within a given time.had a great experience with them. thank you Praveen for your fantastic work" }
    ];

    let DataList = data.map((val, i) => {
        return (
            <div className="swiper-slide brand-logo-slider__single border border-primary"
                style={{}} key={i}>
                <div class="card swiper-slide">
                    <div class="image-content">
                        {/* <span class="overlay"></span> */}
                        <div className="card-image">
                            <img src={`images/5-Star-Rating-PNG.png`} className="img-fluid" alt="on" />
                        </div>
                        <div class="card-content">
                            <h2 class="name">{val.name}</h2>
                            <p class="description">{val.desc}</p>
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
