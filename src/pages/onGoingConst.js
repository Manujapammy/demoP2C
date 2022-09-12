import OnGoingProject from "./ongoingProject";

export default function OnGoingConst() {
    let anugrahaNilaya = [
        { img: 'images/pic6/image_m1.jpg', name: "image_m Nilaya" },
        { img: 'images/pic6/image_m2.jpg', name: "Praveen" },
        { img: 'images/pic6/image_m3.jpg', name: "Papegowdas" },
        { img: 'images/pic6/image_m1.jpg', name: "Bhagya" },
        { img: 'images/pic6/image_m2.jpg', name: "Papegowdas" },
        { img: 'images/pic6/image_m3.jpg', name: "Bhagya" }
    ];
    let anakereNilaya = [
        { img: 'images/pic1/anakere8.jpg', name: "anakere Nilaya" },
        { img: 'images/pic1/anakere2.jpg', name: "Praveen" },
        { img: 'images/pic1/anakere3.jpg', name: "Papegowdas" },
        { img: 'images/pic1/anakere7.jpg', name: "Bhagya" },
        { img: 'images/pic1/anakere1.jpg', name: "Papegowdas" },
        { img: 'images/pic1/anakere6.jpg', name: "Bhagya" }
    ];

    return (
        <>
            <h1 class="heading"> On
                <span> going projects</span> </h1>
            <div class="box-container">

                <div class="box">
                    <div class="image">
                        {/* <img src="images/pic6/image_m1.jpg" alt="anugraha nilaya" /> */}
                        <div className="pImageFolder">
                            <OnGoingProject
                                data={anugrahaNilaya} />
                        </div>
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Brundavana</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus">
                        </i>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                    <div className="pImageFolder">
                            <OnGoingProject
                                data={anakereNilaya} />
                        </div>
                        {/* <img src="images/pic1/anakere8.jpg" alt="anugraha nilaya" /> */}
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>Heaven Nilaya</h3>
                            <p>construction, design</p>
                        </div>
                        <i class="fas fa-plus"></i>
                    </div>
                </div>
            </div>
        </>
    )
}